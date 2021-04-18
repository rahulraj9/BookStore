const bookModel = require('../model/bookModel')
let statusCode = require('../middleware/httpStatusCode.json')

class BookService {

    addBook = (data, role) => {
        return bookModel.addBook(data)
            .then((result) => {
                console.log(role);
                return ({ success: true, message: "Book added Successfully", data: result, status: statusCode.OK });
            })
            .catch((error) => {
                return ({ success: false, message: "Failed to add book in record", status: statusCode.BadRequest });
            })
    }

    updateBook = (id, newData) => {
        return bookModel.updateBook(id, newData)
            .then((result) => {
                console.log(id);
                return ({ message: "Book Update Successfully", data: result, status: statusCode.OK });
            })
            .catch((error) => {
                return ({ message: "Book is Not found", error: error, status: statusCode.NotFound });
            })
    }

    deleteBook(id) {
        return bookModel.deleteBook(id)
            .then((result) => {
                if (result.length == 0) {
                    return ({ message: "Book is Not in DataBase", data: result, status: statusCode.BadRequest });
                }
                return ({ message: "Book Deleted Successfully", data: result, status: statusCode.OK });
            })
            .catch((error) => {
                return ({ message: "Something Goes Wrong", error: error, status: statusCode.NotFound });
            })
    }


}
module.exports = new BookService()