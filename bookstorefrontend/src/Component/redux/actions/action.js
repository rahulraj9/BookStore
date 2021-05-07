import Service from '../../../Services/bookService'
const service = new Service()
export const GET_BOOKS = "GET_BOOKS"
export const getBooks = () => {
    return (dispatch) => {
        return service.getbook().then(result =>
            dispatch(books(result.data.data))
        )
    }

};
export const books = (data) => {
    console.log(data)
    return {
        type: "GET_BOOKS",
        payload: data
    };
};