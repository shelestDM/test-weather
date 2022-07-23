import React, { useEffect, useState } from 'react';
import s from './Days.module.scss';
import Card from './Card';
import WeatherService from '../../../../API/WeatherService';
import Loader from '../Loader';
import { convertTimeToResponse, zeroAdd } from '../../../../utils/cardUtils';
import Popup from '../../../shared/popup/Popup';

const Days = ({City}) => {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false); 
  const [daysWeather, setDaysWeather] = useState('');
  let currentTime = zeroAdd(convertTimeToResponse());

  async function fetchWeatherForDays (City){
      setIsLoading(true);
      const response = await WeatherService.getFiveDaysWeather(City[0],City[1]);
      setDaysWeather(response)
      setIsLoading(false);
  }

  
    const test11 = () =>{
 
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
          :  <div className={s.days}>
              {
                  daysWeather.filter(day=> day.dt_txt.slice(11,16) === currentTime ).map((day)=>
                  <Card key={day.dt_txt} day={day} ></Card> 
                  )
              } 
            </div>
        }
         <Popup></Popup>
        </>
    );
};

export default Days;

  /*  const days  = [
        {
          day: 'Сегодня',
          day_info: '28 авг',
          icon_id: 'sun',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: 'Завтра',
          day_info: '29 авг',
          icon_id: 'small_rain_sun',
          temp_day: '+18',
          temp_night: '+15',
          info: 'небольшой дождь и солнце',
        },
        {
          day: 'Ср',
          day_info: '30 авг',
          icon_id: 'small_rain',
          temp_day: '+18',
          temp_night: '+15',
          info: 'небольшой дождь',
        },
        {
          day: 'Чт',
          day_info: '28 авг',
          icon_id: 'overcast clouds',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: 'Пт',
          day_info: '28 авг',
          icon_id: 'rain',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: 'Сб',
          day_info: '28 авг',
          icon_id: 'sun',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: 'Вс',
          day_info: '28 авг',
          icon_id: 'sun',
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
      ];
 */