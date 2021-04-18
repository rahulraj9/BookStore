const route = require('express').Router()
const userController = require('../controller/userController')
const bookController = require('../controller/bookController')
const cartItemsController = require('../controller/cartController')
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

/**
 * User Cart Operation
 */
route.post('/add_to_cart/:id', jwtToken.tokenVerify, cartItemsController.addToCart)
route.get('/getCartitem', jwtToken.tokenVerify, cartItemsController.getAllItems)
route.delete('/deletecartItem/:id', jwtToken.tokenVerify, cartItemsController.deleteItems)

/**
 * Customer Details
 */


module.exports = route