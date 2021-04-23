const bcryptpassword = require('../middleware/bcrypt')
const jwtToken = require('../middleware/jwtToken')
const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: 'User',
        enum: ["Admin", "User"]
    }

}, { timestamps: true })
const users = mongoose.model('User', userSchema)

class UserModel {

    userDataObject = (result) => {
        return {
            "_id": result._id,
            "fullName": result.fullName,
            "email": result.email,
            "mobile": result.mobile,
            "role": result.role
        }

    }

    userRegistartion = (req, callback) => {
        users.find({ "email": req.email }, (err, data) => {
            if (err) {
                callback(err)
            } else if (data.length > 0) {
                callback(data)
            } else {
                users.create(req, (err, data) => {
                    if (err) {
                        return callback(err)
                    } else {
                        return callback(null, data);
                    }
                })
            }

        })
    }

    userLogin = (req, callback) => {
        users.find({ "email": req.email }, (err, data) => {
            if (err) {

                callback(err)
            } else if (data.length === 0) {
                callback(data)
            } else {
                bcryptpassword.comparePassword(req.password, data[0].password).then(async result => {
                    if (result) {
                        let token = jwtToken.tokenGeneration(this.userDataObject(data[0]));
                        let userData = {
                            "_id": data[0]._id,
                            "role": data[0].role,
                            "fullName": data[0].fullName,
                            "email": data[0].email,
                            "mobile": data[0].mobile,
                            "token": token
                        }
                        callback(null, userData)
                    } else {
                        callback(null, result)
                    }
                })
            }

        })
    }

}
module.exports = new UserModel()