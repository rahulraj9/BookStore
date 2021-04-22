const orderDetailsModel = require('../model/orderModel')
const orderBookModel = require('../model/orderModel')
const statusCode = require('../middleware/httpStatusCode.json')

class OrderBookService {
    placeOrder(data, id) {
        console.log(data)
        data.userID = id;
        const orderid = require('order-id')('mysecret');
        const ID = orderid.generate();
        data.orderID = ID;


        return orderBookModel.placeOrder(data)
            .then((result) => {
                return ({ success: true, message: "Order Placed Successfully", data: result, status: statusCode.OK });
            })
            .catch((error) => {
                return ({ success: false, message: "Failed to Placed Order", status: statusCode.BadRequest });
            })
    }
    getOrderDetails(id) {
        return orderBookModel.getOrderDetails(id)
            .then((result) => {
                return ({ success: true, message: "Order Details Successfully", data: result, status: statusCode.OK });
            }).catch((err) => {
                return ({ success: false, message: "Failed to get details Order", status: statusCode.BadRequest });
            });

    }
}
module.exports = new OrderBookService();