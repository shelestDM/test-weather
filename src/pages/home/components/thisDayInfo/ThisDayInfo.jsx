import React from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png'
import ThisDayItem from './ThisDayItem';
import { useWindDeg, useWindPower } from '../../../../hooks/useWindDeg';
import { windDirection } from '../../../../utils';


const ThisDayInfo = ({weatherToday}) => {

  const items = [
    {
      icon_id: 'temp',
      name: 'Temperature ',
      value: Number(weatherToday.main.temp).toFixed(0)  + ' ° feels like ' + Number(weatherToday.main.feels_like).toFixed(0) + '°'
    },
    {
      icon_id: 'pressure',
      name: 'Pressure',
      value: (Number(weatherToday.main.pressure) / 1.333).toFixed(0) +  ' mm of m.c.',
    },
    {
      icon_id: 'precipitation',
      name: 'Humidity',
      value: weatherToday.main.humidity + ' %'
    },
    {
      icon_id: 'wind',
      name: 'Wind',
      value: weatherToday.wind.speed.toFixed(1) + ' m/s , '+ windDirection[useWindDeg(weatherToday.wind.deg)] + ' , ' + useWindPower(weatherToday.wind.speed.toFixed(1)),
    },
  ]

  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {
          items.map((item)=>(
          <ThisDayItem key={item.icon_id} item={item}></ThisDayItem>
          ))
        }

      </div>
      <img className={s.cloud__img} src={cloud} alt="cloud" />
    </div>
  )
}

export default ThisDayInfo;