let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var date = new Date().getDay();

  function getWeekDay(date) {
    return days[date.getDay()];
  }

  function calcNextDay (date){
    if(date<=6){return date}
    else if(date === 7){return 0}
  }

  export function todayTomorrow  ( str ){
    if(str === days[date] ){
    return 'Today'}
    else if(str === days[calcNextDay(date+1)]){
    return 'Tommorow' }
    return str;
}

  export function getDayOfWeek(text_date){
    let date = new Date(text_date);
    let result = getWeekDay(date);
    return result;
  }

  export function sliceDate ( date ){
    return date.slice(5,10).split('-').reverse().join('.') 
  }
  
  export function FirsLetterBig ( string ){
    return  string.slice(0,1).toUpperCase() + string.slice(1); 
  }

  export function zeroAdd ( time ) {
    if(time.length === 4){
      return '0' + time;
    }
    return time;
  }

  export function convertTimeToResponse () {
    return (Math.floor(new Date().getHours()/3))*3 + ':00';
  }

  export function getWeatherTime (date) {
    return date.slice(11,16)
  }