import React from 'react';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';
import { FirsLetterBig, getDayOfWeek, sliceDate, todayTomorrow } from '../../../../utils/cardUtils';
import s from './Days.module.scss';

const Card = ({day,setVisiblePop}) => {
      
    return (
        <div className={s.card}>
            <div className={s.day}>{todayTomorrow(getDayOfWeek(day.dt_txt))}</div>
            <div className={s.day__info}>{sliceDate(day.dt_txt)}</div>   
            <div className={s.img}>
                <GlobalSvgSelector id={day.weather[0].description}></GlobalSvgSelector>
            </div>
            <div className={s.temp__day}>{day.main.temp}°</div>
            <div className={s.temp__night}>{day.temp_night}°</div>
            <div className={s.info}>{FirsLetterBig(day.weather[0].description)}</div>
        </div>
    );
};

export default Card;


/*     const daysDataInterface = [
        {
          day: '', 
          day_info: '[0].dt_txt',
          icon_id: '[0].weather[0].description',  //scattered clouds
          temp_day: '[0].main.temp',
          temp_night: '',
          info: '[0].weather[0].main'
        }
      ] */