const customerAdressService = require('../service/customerDetailsService')


let response = {}


class CustomerDetails {
    customerAddress(req, res) {
        try {
            let id = req.decoded._id;
            customerAdressService.customerAddress(req.body, id)
                .then((result) => {
                    response.success = true;
                    response.message = result.message;
                    response.data = result.data;
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

    getAddress(req, res, next) {
        try {
            let id = req.decoded._id;
            console.log(id);
            customerAdressService.getAddress(id)
                .then((result) => {
                    response.success = true;
                    response.message = result.message;
                    response.data = result.data;
                    res.status(result.status).send(response);
                }).catch((error) => {
                    response.success = false;
                    response.data = errror.message;
                    res.status(error.status).send(response);
                })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new CustomerDetails();