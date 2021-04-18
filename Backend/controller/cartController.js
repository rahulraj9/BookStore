const cartService = require('../service/cartService')
let statusCode = require('../middleware/httpStatusCode.json')
const jwtToken = require('../middleware/jwtToken')
let response = {}
const logger = require("../middleware/logger")


class CartController {
    addToCart = (req, res, next) => {
        try {
            console.log("We are inside the controller's add_to_cart_Controller function")
            let addToCart_data = {
                userID: req.decoded._id,
                book_id: req.params.id
            }
            cartService.addToCart(addToCart_data, (data, err) => {
                if (data) {
                    response.success = data.success;
                    response.message = data.message;
                    response.data = data.data;
                    return res.send(response);
                } else if (err) {
                    response.success = err.success;
                    response.message = err.message;
                    return res.send(response);
                }
            })

        } catch (error) {
            next(error)
        }

    }
}

module.exports = new CartController();