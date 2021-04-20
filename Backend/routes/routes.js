const route = require('express').Router()
const userController = require('../controller/userController')
const bookController = require('../controller/bookController')
const cartItemsController = require('../controller/cartController')
const customerDetails = require('../controller/customerDetailsController')
const orderDetailsController = require('../controller/orderController')
const jwtToken = require('../middleware/jwtToken')

const { login, registration } = require('../middleware/validator')
const { validation } = require('../middleware/validate')
const { tokenGeneration } = require('../middleware/jwtToken')


/**
 * Login And SignUp for user And Registration
 */
route.post('/registration', registration, validation, userController.userResgistartionController)
route.post('/login', login, validation, userController.userLoginController)

/**
 * Admin book Operation
 */
route.post('/bookadd', jwtToken.tokenVerify, bookController.addBook)
route.put('/updatebook/:id', jwtToken.tokenVerify, bookController.updateBook)
route.delete('/deletebook/:id', jwtToken.tokenVerify, bookController.deleteBook)
route.get('/getallbook/', jwtToken.tokenVerify, bookController.getbook)

/**
 * User Cart Operation
 */
route.post('/add_to_cart/:id', jwtToken.tokenVerify, cartItemsController.addToCart)
route.get('/getCartitem', jwtToken.tokenVerify, cartItemsController.getAllItems)
route.delete('/deletecartItem/:id', jwtToken.tokenVerify, cartItemsController.deleteItems)
route.put('/updateCartItem/:id', jwtToken.tokenVerify, cartItemsController.update_cart_item_Quantity_Controller)

/**
 * Customer Details
 */
route.post('/CustomerDetails/', jwtToken.tokenVerify, customerDetails.customerAddress)
route.get('/CustomerDetails/', jwtToken.tokenVerify, customerDetails.getAddress)


/**
 * order
 */

route.post('/add/order_details', jwtToken.tokenVerify, orderDetailsController.placeOrder)

route.get('/add/order_details', jwtToken.tokenVerify, orderDetailsController.getOrderDetails)

module.exports = route