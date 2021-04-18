let bookService = require('../service/bookService')
const { infoLogger, errorLogger } = require('../middleware/logger')
let response = {}

class bookController {

    addBook = (req, res, next) => {
        try {
            let role = req.decoded.role;
            if (role === "Admin") {
                bookService.addBook(req.body, role)
                    .then((result) => {
                        response.data = result.data;
                        response.flag = true;
                        response.message = result.message;
                        res.status(result.status).send(response);
                    }).catch((err) => {
                        response.flag = false;
                        response.data = err.message;
                        res.status(err.status).send(response);
                    })
            } else {
                response.flag = false;
                response.message = "You are Not authorized to add book";
                res.status(401).send(response);

            }

        } catch (error) {
            next(error)
        }
    }

    updateBook = (req, res, next) => {
        try {
            let newData = req.body;
            let id = req.params.id;
            console.log("update id and data", id);
            let role = req.decoded.role;
            if (role === "Admin") {
                bookService.updateBook(id, newData)
                    .then((result) => {
                        response.data = result.newData;
                        response.flag = true;
                        response.message = result.message;
                        res.status(result.status).send(response);
                    }).catch((err) => {
                        response.flag = false;
                        response.data = err.message;
                        res.status(err.status).send(response);
                    })
            } else {
                response.flag = false;
                response.message = "You are Not authorized to Update book";
                res.status(401).send(response);

            }
        } catch (error) {
            next(error)
        }
    }
    deleteBook(req, res, next) {
        try {
            let id = req.params.id;
            console.log("update id and data", id);
            let role = req.decoded.role;
            if (role === "Admin") {
                bookService.deleteBook(id)
                    .then((result) => {
                        response.data = result.data;
                        response.flag = true;
                        response.message = result.message;
                        res.status(result.status).send(response);
                    }).catch((err) => {
                        response.flag = false;
                        response.data = err.message;
                        res.status(err.status).send(response);
                    })
            } else {
                response.flag = false;
                response.message = "You are Not authorized to delete book";
                res.status(401).send(response);

            }

        } catch (error) {
            next(error)
        }
    }

}
module.exports = new bookController()