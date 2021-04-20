const mongoose = require('mongoose')
const Schema = mongoose.Schema
const customerAddressSchema = new Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    fullname: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    addresstype: {
        type: String,
        required: true
    },
    locality: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
})

const customerAddressModel = mongoose.model('customerDetails', customerAddressSchema)

class CustomerDetails {

    customerAddress(data) {
        let customerAddressData = new customerAddressModel(data)
        return customerAddressData.save(data)
            .then((result) => {
                return result;
            }).catch((error) => {
                return error;
            });
    }
    getAddress(id) {
        return customerAddressModel.find(id)
            .then(result => {
                console.log("we are inside", id);
                return result
            }).catch(error => {
                return error
            })

    }
}
module.exports = new CustomerDetails()