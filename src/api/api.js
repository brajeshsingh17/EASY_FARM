import axios from "axios";
const api = axios.create({
    baseURL : "https://major-backend.vercel.app/v1/",
    withCredentials : false,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
    }
})
export default api;