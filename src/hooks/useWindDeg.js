import { windPower } from "../utils"

export const useWindDeg = (deg) =>{

    if(deg>=0 && deg <=22){ return 0}
    else if(deg>=23 && deg <=45) {return 45}
    else if(deg>=46 && deg <=75) {return 45}
    else if(deg>=76 && deg <=90) {return 90}
    else if(deg>=91 && deg <=113) {return 90}
    else if(deg>=114 && deg <=135) {return 135}
    else if(deg>=136 && deg <=157) {return 135}
    else if(deg>=158 && deg <=180) {return 180}
    else if(deg>=181 && deg <=203) {return 180}
    else if(deg>=204 && deg <=225) {return 225}
    else if(deg>=226 && deg <=247) {return 225}
    else if (deg>=248 && deg <=270){return 270}
    else if(deg>=271 && deg <=293){return 270}
    else if(deg>=294 && deg <=316) {return 315}
    else if (deg>=317 && deg <=339) {return 315}
    else if(deg>=340 && deg <=360) {return 360}
}

export const useWindPower = (speed) =>{
    let keys = Object.keys(windPower);

    for(let i = 0; i<keys.length;i++)
    {
        if(speed<keys[i])
        {return windPower[keys[i]] }
    }
}