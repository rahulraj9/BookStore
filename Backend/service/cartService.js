const cartModel = require('../model/cartModel')
    // const cartModel = require('../Model/cartModel')
let statusCode = require('../middleware/httpStatusCode.json')


class CartService {

    addToCart = (cartData, callback) => {
        cartModel.addToCart(cartData, (data, err) => {
            if (data) {
                console.log('data in services : ', data)
                callback(data)
            } else if (err) {
                console.log('err in services : ', err)
                callback(err)
            }
        })
    }


}
module.exports = new CartService()