import React, { useEffect, useState } from 'react';
import s from './Days.module.scss';
import Card from './Card';
import WeatherService from '../../../../API/WeatherService';
import Loader from '../Loader';
import { convertTimeToResponse, zeroAdd } from '../../../../utils/cardUtils';
import Popup from '../../../shared/popup/Popup';

const Days = ({City}) => {
  // eslint-disable-next-line no-unused-vars

  const [dayChoice, setDayChoice] = useState('')
  const [isLoading, setIsLoading] = useState(false); 
  const [daysWeather, setDaysWeather] = useState('');
  let currentTime = zeroAdd(convertTimeToResponse());

  async function fetchWeatherForDays (City){
      setIsLoading(true);
      const response = await WeatherService.getFiveDaysWeather(City[0],City[1]);
      setDaysWeather(response)
      setIsLoading(false);
  }

  const getCurrentDay = (currentDay) =>{
    setDayChoice(currentDay);
  }

  useEffect(()=>{
    fetchWeatherForDays(City)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  

    return (
        <>
        {
          daysWeather.length === 0
          ? <Loader></Loader>
          :  <div className={s.days} >
              {
                  daysWeather.filter(day=> day.dt_txt.slice(11,16) === '12:00' ).map((day, index)=>
                  <Card  key={day.dt_txt} day={day} getCurrentDay={getCurrentDay} index={index} ></Card> 
                  )
              } 
            </div>
        }
         
         {
          dayChoice
          ?  daysWeather.filter(day=> day.dt_txt === dayChoice).map((day)=>
            <Popup key={day.dt_txt} day={day}></Popup>
          )
          :<></>
         }
        </>
    );
};

export default Days;

 