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

}