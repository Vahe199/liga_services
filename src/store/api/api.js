import axios from "axios";

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Authorization': `Bearer ${token}`
    }
})
