import React, { useContext, useEffect, useState } from 'react';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';
import { CityContext } from '../../../../context/CityContext';
import s from './ThisDay.module.scss';

const ThisDay = ({weatherToday}) => {

  let city = useContext(CityContext);
  const [dateNow, setDate] = useState(getTime());
  let clock =() =>{
    setInterval(()=>{
      setDate(getTime())
    },1000)
  } 

/*   useEffect(()=>{
    clock();
    return () =>{
      clearInterval(clock)
    } 
  },[]) */


  function getTime(){
    var date = new Date(),
    hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
    minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
    seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    return {hours, minutes, seconds}
  }

  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{Math.ceil(weatherToday.main.temp)}</div>
          <div className={s.this__day_name}>Today</div>
        </div>
        <GlobalSvgSelector /* className={s.svg} */ id={weatherToday.weather[0].description}></GlobalSvgSelector>
      </div>

       <div className={s.bottom__block}>
          <div className={s.this__time}>
            Time : <span> {dateNow.hours + ':' + dateNow.minutes + ':' + dateNow.seconds}</span>
          </div>
          <div className={s.this__city}>
            Town: <span> {city[0].label} </span>
          </div>
       </div>
    </div>
  )
}

export default ThisDay;