import axios from 'axios';



export const axiosInstance = axios.create({
    baseURL: "http://localhost:3003/",
    headers: {
        "Content-Type": "application/json",
        Authorization: typeof localStorage !== 'undefined' ? localStorage.getItem('token') : 'null'
      }
})