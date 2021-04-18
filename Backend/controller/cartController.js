const cartService = require('../service/cartService')
let statusCode = require('../middleware/httpStatusCode.json')
const jwtToken = require('../middleware/jwtToken')
let response = {}
const logger = require("../middleware/logger")


class CartController {
    addToCart = (req, res, next) => {
        console.log("We are inside the controller's add_to_cart_Controller function")
        let addToCart_data = {
            userId: req.decoded._id,
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
    }
    getAllItems(req, res, next) {
        try {
            let id = req.decoded._id;
            cartService.getAllItems(id)
                .then((result) => {
                    response.data = result.data;
                    response.flag = true;
                    response.message = result.message;
                    res.status(result.status).send(response);
                }).catch((err) => {
                    response.flag = false;
                    response.data = err.message;
                    res.status(err.status).send(response);
                });
        } catch (error) {
            next(error);
        }
    }
    deleteItems(req, res, next) {
        try {
            let id = req.params.id;
            cartService.deleteItems(id)
                .then((result) => {
                    response.flag = true;
                    response.data = result.data;
                    response.message = result.message;
                    res.status(result.status).send(response);
                }).catch((err) => {
                    response.flag = false;
                    response.data = err.message;
                    res.status(err.status).send(response);
                });
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new CartController();