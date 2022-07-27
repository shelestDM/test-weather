import React, { useContext, useState } from 'react';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';
import { PopUpVisabilityContext } from '../../../../context/PopUpVisabilityContext';
import { FirsLetterBig, sliceDate, } from '../../../../utils/cardUtils';
import s from './Days.module.scss';

const Card = ({day, getCurrentDay, index}) => {

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var date = new Date().getDay();

    const [currentDay, setCurrentDay] = useState(day.dt_txt)
    const visability = useContext(PopUpVisabilityContext);

    const changeVisability = () =>{
        visability.HideOrShow(visability.visability === false ? true : false)
      }

    const setDay = () =>{
        getCurrentDay(currentDay);
        changeVisability()
    }


    return (
        <div className={s.card}  onClick={setDay} >
            <div className={s.day_and_img_wrapper}>
                <div className={s.day_wrapper}>
                    <div className={s.day}>{days[date+index <=6 ? date+index : (date+index)-days.length]}</div>
                    <div className={s.day__info}>{sliceDate(day.dt_txt)}</div> 
                </div>
                <div className={s.img}>
                  
                   <div className={s.svg} > <GlobalSvgSelector id={day.weather[0].description}></GlobalSvgSelector></div>
                   <div className={s.info}>{FirsLetterBig(day.weather[0].description)}</div>
                </div>
            </div>
            <div className={s.temp_wrapper}>
                <div className={s.temp__day}>{day.main.temp}°</div>
          {/*       <div className={s.temp__night}>{day.main.temp_min}°</div> */}
            </div>
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