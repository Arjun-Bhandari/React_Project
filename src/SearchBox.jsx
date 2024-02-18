import "./searchBox.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react"
export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "ecf82fca09a4c706380fab4cd93dfa19"

     let getWeatherInfo = async ()=>{

        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city:city,
                temp:jsonResponse.main.temp,
                tempMax:jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
         
        }catch(error){
            throw error;
        }
    }

   

    let handelChange = (event)=>{
        setCity(event.target.value)
    };

    let handelSubmit = async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
           let newinfo = await getWeatherInfo();
           updateInfo(newinfo);
        }catch(error){
            setError(true)
        }
        
    }
    return(
        <div className='searchBox'>
            <form onSubmit={handelSubmit}>
            <TextField id="City" label="City Name" variant="outlined" value={city} onChange={handelChange} required/>
            <br></br><br/>
            <Button variant="contained" type='submit'>Search</Button>
            {error && <p style = {{color:"red"}}>No Such Place is Found Or Exist In Our API Error:- 404</p>}
            </form>
            
        </div>
    );
}