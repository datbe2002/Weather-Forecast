import axios from "axios";
import { BASE_URL } from "../env";



const axiosCustom = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export default axiosCustom

