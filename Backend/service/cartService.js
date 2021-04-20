const cartModel = require('../model/cartModel')
let statusCode = require('../middleware/httpStatusCode.json')


class CartService {

    addToCart = (cartData, callback) => {
        cartModel.addToCart(cartData, (data, err) => {
            if (data) {
                callback(data)
            } else if (err) {
                callback(err)
            }
        })
    }

    getAllItems(id) {
        let userId = { userId: id }
        return cartModel.getAllItems(userId)
            .then((result) => {

                return ({ message: "User All Notes Successfully", data: result, status: statusCode.OK });
            })
            .catch((error) => {
                return ({ message: "Note Record is Not found", error: error, status: statusCode.NotFound });
            })
    }

    deleteItems(id) {
        return cartModel.deleteItems(id)
            .then((result) => {
                if (result.length == 0) {
                    return ({ message: "No Item", data: result, status: statusCode.BadRequest });
                }
                return ({ message: "Item Remove Successfully from cart", data: result, status: statusCode.OK });
            })
            .catch((error) => {
                return ({ message: "No Item found in Record", error: error, status: statusCode.NotFound });
            })
    }


    update_cart_item_Quantity_Services = (data, callback) => {

        console.log("We are inside the service's update_cart_item_Quantity_Services function")
        cartModel.update_cart_item_Quantity_Model(data, (data, err) => {
            if (data) {
                callback(data)
            } else if (err) {
                callback(err)
            }
        })
    }




}
module.exports = new CartService()