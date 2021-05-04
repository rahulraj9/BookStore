import { ADD_TO_CART } from '../constants/constants'
export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        data: data
    }
}