import axios from "axios"

const api = axios.create({
    baseURL: process.env.DUMMYJSON_BASE_URL,
    timeout: 5000,
    headers :{

    }
})

export const internalApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SITE_URL,
    timeout: 5000,
    headers :{

    }
})

export default api