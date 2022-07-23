import React from 'react';
import GlobalSvgSelector from '../../../assets/icons/global/GlobalSvgSelector';
import ThisDayItem from '../../home/components/thisDayInfo/ThisDayItem';
import s from './Popup.module.scss';

const Popup = () => {

  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
  ]


/* 
  if(context.visible){
    popUpMainClasses.push(s.hide);
  } */
 
 

  return (
    <div className={s.hide} >
    {/* <div className={s.blur}></div> */}
    <div className={s.popup}>
      <div className={s.day}>
        <div className={s.day__temp}>20°</div>
        <div className={s.day__name}>Monday</div>
        <div className={s.img}><GlobalSvgSelector id={'sun'}></GlobalSvgSelector></div>
        <div className={s.day__time}>
            Time : <span> 11:34 </span>
          </div>
          <div className={s.day__city}>
            Time: <span> Kyiv </span>
          </div>
      </div>
        <div className={s.this__day_info_items}>
        {
          items.map((item)=>(
          <ThisDayItem key={item.icon_id} item={item}></ThisDayItem>
          ))
        }
      </div>
      <div className={s.close}>
          <GlobalSvgSelector id={'close'}></GlobalSvgSelector>
      </div>
    </div>
    </div>
  )
}

export default Popup;