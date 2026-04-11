import axios from "axios"

const api = axios.create({
    baseURL: process.env.DUMMYJSON_BASE_URL,
    timeout: 5000,
    headers :{

    }
})

export default api