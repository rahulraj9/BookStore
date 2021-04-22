const mongoose = require('mongoose');
const Schema = mongoose.Schema

const bookSchema = new Schema({
    bookname: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
}, { timestamps: true })

let booksModel = mongoose.model('bookDB', bookSchema)

class bookModel {
    addBook = (data) => {
        let bookData = new booksModel(data)
        return bookData.save(data)
            .then((result) => {
                return result;
            }).catch((error) => {
                return error
            })
    }
    updateBook = (id, newData) => {
        return booksModel.findByIdAndUpdate(id, newData)
            .then(result => {
                return result;
            })
            .catch(error => {
                return error;
            })
    }
    deleteBook(id) {
        return booksModel.findByIdAndRemove(id)
            .then(result => {
                return result;
            })
            .catch(error => {
                return error;
            })
    }
    getbook() {
        return booksModel.find()
            .then(result => {
                return (result)
            }).catch(error => {
                return (error)
            })

    }
    findOne(id) {
        return booksModel.findOne({ _id: id })
            .then((result) => {
                return result;
            })
            .catch((error) => {
                return error;
            })
    }


}
module.exports = new bookModel()