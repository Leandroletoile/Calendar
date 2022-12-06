import axios from 'axios';

const calendarApi = axios.create({
    baseURL: process.env.VITE_API_URL,
})


// TODO configurar interceptores

calendarApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'x-token': JSON.parse(localStorage.getItem('user'))?.token
    }

    return config;
})

export default calendarApi;
