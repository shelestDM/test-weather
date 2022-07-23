import React, { useContext, useState } from 'react';
import WeatherService from '../../../../API/WeatherService';
import { TabsContext } from '../../../../context/TabsContext';
import s from './Days.module.scss';

const Tabs = (City) => {

  const [isLoading, setIsLoading] = useState(true); 
  const [daysWeather, setDaysWeather] = useState('');
  const tabs = useContext(TabsContext)

  /* async */ function fetchWeatherForHours (/* City */tab){
 /*    setIsLoading(true);
    let response = await WeatherService.getFiveDaysWeather(City[0],City[1])
    setDaysWeather(response.list)
    setIsLoading(false); */
    console.log(tab)
  }


    

    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {
                    tabs.map((tab)=>
                      <div 
                      className={s.tab } 
                      key={tab.value} 
                      onClick={()=>{fetchWeatherForHours(tab.length)}} 
                      >{tab.value}
                      </div>
                )}
            </div>
            <div className={s.cancel}>Cancel</div>
        </div>
    );
};

export default Tabs;

/* + ' ' +s.active */