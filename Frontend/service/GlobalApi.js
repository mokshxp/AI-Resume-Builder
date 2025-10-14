import axios from "axios";

const API_KEY=import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api/',
    timeout: 10000, // 10 seconds timeout
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${API_KEY}`
    }
})

// Add request interceptor
axiosClient.interceptors.request.use(
    (config) => {
        console.log('Making API request to:', config.url);
        return config;
    },
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Add response interceptor
axiosClient.interceptors.response.use(
    (response) => {
        console.log('API response received:', response.status);
        return response;
    },
    (error) => {
        console.error('API error:', error.response?.status, error.message);
        if (error.code === 'ECONNREFUSED') {
            console.error('Backend server is not running on http://localhost:1337');
        }
        return Promise.reject(error);
    }
);

const CreateNewResume=(data)=>axiosClient.post('/user-resumes',data);

export default {
    CreateNewResume
}