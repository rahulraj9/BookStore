const orderBookService = require('../service/orderService')

let response = {}
class OrderBookController {
    placeOrder(req, res) {
        try {
            let id = req.decoded._id;
            console.log(id)
            orderBookService.placeOrder(req.body, id)
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
            console.log(error);
        }
    }
    getOrderDetails(req, res) {
        try {
            let id = req.decoded._id;
            orderBookService.getOrderDetails(id)
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

        }
    }
}
module.exports = new OrderBookController();