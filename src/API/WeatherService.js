import axios from "axios";

export default class WeatherService {
    static async getCityWeather(lat, lon){
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d64df67dec2f4e5a4043f49565af2c05`);
        return response.data;
    }

    static async getFiveDaysWeather(lat, lon){
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=d64df67dec2f4e5a4043f49565af2c05&units=metric`);
        return response.data.list;     
    }
}


