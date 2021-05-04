// import { ADD_TO_CART } from '../constants/constants'
// export const addToCart = (data) => {
//     return {
//         type: ADD_TO_CART,
//         data: data
//     }
// }



export const GET_BOOK = 'GET_BOOK';


export function GetBook(bookArray) {
    return {
        type: GET_BOOK,
        bookArray: bookArray,
    };

}