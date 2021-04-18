const cartModel = require('../model/cartModel')
    // const cartModel = require('../Model/cartModel')
let statusCode = require('../middleware/httpStatusCode.json')


class CartService {

    addToCart = (cartData, callback) => {
        // console.log("hello", cartData);
        cartModel.addToCart(cartData, (data, err) => {
            if (data) {
                // console.log('data in services : ', data)
                callback(data)
            } else if (err) {
                // console.log('err in services : ', err)
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


}
module.exports = new CartService()