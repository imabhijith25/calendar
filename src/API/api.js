import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL
console.log(baseURL)
const axiosInstance = axios.create({
    baseURL,
 
})

export {axiosInstance, baseURL}