import axios from "axios"
const API_URL = 'https://65a2091c42ecd7d7f0a71233.mockapi.io/'


const AxiosService = axios.create({
    baseURL: API_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

export default AxiosService