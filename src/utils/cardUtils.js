let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getWeekDay(date) {
    return days[date.getDay()];
  }

  export function getDayOfWeek(text_date){
    let date = new Date(text_date)
    return getWeekDay(date)
  }

  export function sliceDate ( date ){
    return date.slice(5,10).split('-').reverse().join('.') 
  }
  
  export function FirsLetterBig ( string ){
    return  string.slice(0,1).toUpperCase() + string.slice(1); 
  }

  export function todayTomorrow  ( string ){
        var date = new Date().getDay()
        if(string === days[date] ){
        return 'Today'}
        else if(string === days[0] ){
        return 'Tommorow' }
        return string
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