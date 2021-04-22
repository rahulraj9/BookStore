const mongoose = require('mongoose');

const Schema = mongoose.Schema
var orderSchema = new mongoose.Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    book_ID: [{
        type: Schema.Types.ObjectId,
        ref: 'bookDB',
        require: true
    }],
    customerDetails: {
        type: Schema.Types.ObjectId,
        ref: 'customerDetails',
        require: true
    },
    orderID: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

var orderModel = mongoose.model('orderPlaced', orderSchema);

class OrderBookModel {
    placeOrder(data) {
        return orderModel.create(data)
            .then((result) => {
                return result;
            }).catch((error) => {
                return error;
            });
    }
    getOrderDetails(id) {
        return orderModel.findOne({ userID: id })
            .populate('userID')
            .populate('book_ID')
            .populate('customerDetails')
            .then((result) => {
                return result;
            })
            .catch((error) => {
                return error;
            })
    }
}
module.exports = new OrderBookModel()