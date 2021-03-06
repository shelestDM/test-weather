import axios from 'axios';


const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

api.interceptors.request.use(config =>{
    config.url = process.env.REACT_APP_API_URL + config.url + `&units=metric` + `&appid=`+ process.env.REACT_APP_API_KEY;
    console.log("1",config.url)
    return config;

});

export default api;