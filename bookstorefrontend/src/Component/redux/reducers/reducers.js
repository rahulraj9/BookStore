// import { ADD_TO_CART } from '../constants/constants'
// const initialState = {
//     cardData: []
// }
// export default function cardItems(state = [], action) {
//     switch (action.type) {
//         case ADD_TO_CART:
//             // console.warn("reducer",action)
//             return [
//                 ...state,
//                 { cardData: action.data }
//             ]
//         default:
//             return state
//     }


// }


import { GET_BOOK } from '../actions/action';

const initialState = {
    books: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BOOK:
            return {
                ...state,
                bookArray: action.bookArray,
            };
        default:
            return state;
    }
}

export default rootReducer;