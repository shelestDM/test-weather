import React, { useEffect, useState } from 'react';
import WeatherService from '../../API/WeatherService';
import Days from './components/days/Days';
import Loader from './components/Loader';
import ThisDay from './components/thisDay/ThisDay';
import ThisDayInfo from './components/thisDayInfo/ThisDayInfo';
import s from './Home.module.scss';

const Home = ({City}) => {

  const [weatherToday, setWeatherToday] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  async function fetchWeather (City){
    setIsLoading(true);
    const weatherToday = await WeatherService.getCityWeather(City[0],City[1]);
    setWeatherToday(weatherToday);
    setIsLoading(false); 
  }

  useEffect(()=>{
    fetchWeather(City)
  },[City])

  return (
    <div className={s.home}>
      {
        isLoading
        ? <Loader></Loader>
        : <div className={s.wrapper}>
          <ThisDay weatherToday={weatherToday} isLoading={isLoading}></ThisDay> 
          <ThisDayInfo weatherToday={weatherToday} ></ThisDayInfo>
          </div>
      }
      <Days City={City} ></Days>
    </div>
  )
}

export default Home;


/* <div>The weather data is Loading...</div> */