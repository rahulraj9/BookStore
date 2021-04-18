const userModel = require('./userModel')
const bookModel = require('./bookModel')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    book_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bookDB'
    },
    quantity: {
        type: Number,
        default: 1
    }
})

let cartModel = mongoose.model('cart_Items', cartSchema)
module.exports = cartModel


class CartModel {

    addToCart = (cartData, callback) => {
        console.log("Data is", cartData);
        cartModel.find({
            "$and": [
                { userId: cartData.userId },
                { book_ID: cartData.book_id }
            ]
        }).then(data => {
            if (data.length !== 0) {
                let prevQuantity = data[0].quantity + 1
                let updatedCartData = {
                    quantity: prevQuantity,
                }
                cartModel.findByIdAndUpdate({ _id: data[0]._id }, updatedCartData, { new: true }).then(data => {
                    callback({ message: 'Successfully added to the cart', success: true, data: data, status: 200 });
                }).catch(err => {
                    callback({ message: 'Error failed to add to the cart', success: true, err: err, status: 400 })
                })
            } else if (data.length == 0) {

                let cartItemData = {
                    userId: cartData.userId,
                    book_ID: cartData.book_id,

                }
                return cartModel.create(cartItemData)
                    .then(data => {
                        console.log("cartItemData is", cartItemData);
                        callback({ message: 'Successfully added to the cart', success: true, data: data, status: 200 });
                    }).catch(err => {
                        callback({ message: 'Error failed to add to the cart', success: true, err: err, status: 400 });
                    })

            }
        }).catch(err => {
            console.log(err);
        })
    }

    getAllItems(id) {
        return cartModel.find(id)
            .populate('book_ID')
            .then(result => {
                console.log("hi", result);
                return result;
            })
            .catch(error => {
                console.log("hi error");
                return error;
            })

    }



}
module.exports = new CartModel();