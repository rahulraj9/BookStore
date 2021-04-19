const customerAdressService = require('../service/customerDetailsService')


let response = {}


class CustomerDetails {
    customerAddress(req, res) {
        try {
            let id = req.decoded._id;
            customerAdressService.customerAddress(req.body, id)
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
}

module.exports = new CustomerDetails();