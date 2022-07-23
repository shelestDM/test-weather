import api from "../axios";

export class WeatherService {
    static async getCurrentWeather(arr){
    return await api.get(`/weather?lat=${arr[0]}&lon=${arr[1]}`)
    }
}