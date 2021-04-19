const customerAdressModel = require('../model/customerDetailsModel')
let statusCode = require('../middleware/httpStatusCode.json')

class CustomerDetails {

    customerAddress(data, id) {
        data.userId = id;
        return customerAdressModel.customerAddress(data)
            .then((result) => {
                return ({ success: true, message: "customerAddress Created Successfully", data: result, status: statusCode.OK });
            })
            .catch((error) => {
                return ({ success: false, message: "Failed to created customerAddress", status: statusCode.BadRequest });
            })
    }
}



module.exports = new CustomerDetails();