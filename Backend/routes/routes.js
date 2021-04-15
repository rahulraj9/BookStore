const route = require('express').Router()
const userController = require('../controller/userController')
const bookController = require('../controller/bookController')
const jwtToken = require('../middleware/jwtToken')

const { login, registration } = require('../middleware/validator')
const { validation } = require('../middleware/validate')
const { tokenGeneration } = require('../middleware/jwtToken')

route.post('/registration', registration, validation, userController.userResgistartionController)
route.post('/login', login, validation, userController.userLoginController)

route.post('/bookadd', jwtToken.tokenVerify, bookController.addBook)
route.put('/updatebook/:id', jwtToken.tokenVerify, bookController.updateBook)
route.delete('/deletebook/:id', jwtToken.tokenVerify, bookController.deleteBook)
module.exports = route