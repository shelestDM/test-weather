import React, { useContext } from 'react';
import GlobalSvgSelector from '../../../assets/icons/global/GlobalSvgSelector';
import { CityContext } from '../../../context/CityContext';
import { PopUpVisabilityContext } from '../../../context/PopUpVisabilityContext';
import { useWindDeg, useWindPower } from '../../../hooks/useWindDeg';
import { windDirection } from '../../../utils';
import { getDayOfWeek, getWeatherTime, todayTomorrow ,sliceDate} from '../../../utils/cardUtils';
import ThisDayItem from '../../home/components/thisDayInfo/ThisDayItem';
import s from './Popup.module.scss';

const Popup = ({day}) => {
  
  let city = useContext(CityContext);
  const visability = useContext(PopUpVisabilityContext);

  let popUpMainClasses = ['']

  if(visability.visability){
    popUpMainClasses.push(s.hide);
  }
 
  const changeVisability = () =>{
    visability.HideOrShow(visability.visability === false ? true : false)
  }
  const items =[
    {
      icon_id: 'temp',
      name: 'Temperature ',
      value: Number(day.main.temp).toFixed(0)  + ' ° feels like ' + Number(day.main.feels_like).toFixed(0) + '°'
    },
    {
      icon_id: 'pressure',
      name: 'Pressure',
      value: (Number(day.main.pressure) / 1.333).toFixed(0) +  ' mm of m.c.',
    },
    {
      icon_id: 'precipitation',
      name: 'Humidity',
      value: day.main.humidity + ' %'
    },
    {
      icon_id: 'wind',
      name: 'Wind',
      value: day.wind.speed.toFixed(1) + ' m/s , '+ windDirection[useWindDeg(day.wind.deg)] + ' , ' + useWindPower(day.wind.speed.toFixed(1)),
    },
  ]
  
 
  return (
    <div className={popUpMainClasses.join(' ')} >
    <div className={s.popup}>
      <div className={s.maincontent}>
        <div className={s.day}>
          <div className={s.top_block}>
            <div className={s.day_and_temp}>
            <div className={s.day__temp}>{Math.ceil(day.main.temp)}°</div>
                <div className={s.day__name}>{sliceDate(day.dt_txt)}</div>
            </div>

            <div className={s.img}><GlobalSvgSelector id={day.weather[0].description}></GlobalSvgSelector></div>
          </div>

         <div className={s.bottom_block}>
            <div className={s.day__city}>
                Town: <span> {city[0].label} </span>
                </div>
                <div className={s.day__time}>
                  Weather at <span>{getWeatherTime(day.dt_txt)}</span> on the selected day
                </div>
            </div>
        </div>
        <div className={s.this__day_info_items}>
          {
            items.map((item)=>(
            <ThisDayItem key={item.icon_id} item={item}></ThisDayItem>
            ))
          }
        </div>
      </div>
      <div className={s.close} onClick={changeVisability}>
          <GlobalSvgSelector id={'close'}></GlobalSvgSelector>
      </div>
    </div>
    </div>
  )
}

export default Popup;
