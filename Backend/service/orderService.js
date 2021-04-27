const orderDetailsModel = require('../model/orderModel')

class order_Details {

    add_Order_details_Services = (orderDetailsData, callback) => {
        orderDetailsModel.add_Order_details_Model(orderDetailsData, (data, err) => {
            if (data) {
                callback({ message: 'Order details added successfully', success: true, status: 200, data: data })
            } else if (err) {
                callback({ message: 'Error failed to add order details', success: false, status: 400, err: err })
            }
        })
    }




}

module.exports = new order_Details();