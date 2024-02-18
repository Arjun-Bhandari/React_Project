import {useState} from "react"

import Search from "./SearchBox"
import Info from "./infoBox"
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo ] = useState({
        city: "Delhi",
        feelsLike: 6.87,
        humidity: 93,
        temp: 8.05,
        tempMax: 8.05,
        tempMin: 8.05,
        weather: "fog",
    });

    let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
    }
    return(
        <div style = {{textAlign:"center"}}>
            <h2>Weather App</h2>
            <Search updateInfo = {updateInfo}/>
            <Info info = {weatherInfo}/>
        </div>
    )
}