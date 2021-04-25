import Axios from "./axiosServices";

const http = new Axios();
const token = localStorage.getItem("Usertoken")
const baseUrl = "http://localhost:4000";

export default class services {

    getbook = () => {

        return http.Get(`${baseUrl}/getallbook`, {
            headers: {
                token: token
            }
        })
    }

    addToCart = (data) => {
        console.log("Data in boookServ", data)
        return http.Post(`${baseUrl}/add_to_cart/${data}`, data, {
            headers: {
                token: token
            }
        })
    }

    getCartBook = () => {
        return http.Get(`${baseUrl}/getCartitem`, {
            headers: {
                token: token
            }
        })

    }
    removeCartBook = (id) => {
        console.log("bookId ::", id)
        console.log(token)
        return http.Del(`${baseUrl}/deletecartItem/${id}`, {
            headers: {
                token: token
            }
        })
    }
    updateCartBook = (data, id) => {
        return http.Put(`${baseUrl}/updateCartItem/${id}`, data, {
            headers: {
                token: token
            }
        })

    }

    customerDetails = (data) => {
        return http.Post(`${baseUrl}/CustomerDetails`, data, {
            headers: {
                token: token
            }
        })
    }

    placeOrder = (data) => {
        return http.Post(`${baseUrl}/add/order_details`, data, {
            headers: {
                token: token
            }
        })
    }

}