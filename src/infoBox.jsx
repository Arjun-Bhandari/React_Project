import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import "./infoBox.css"

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1601141922947-9fc7f16bee8e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL = "https://images.unsplash.com/photo-1571499746278-4a6d7eae379b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1675271988124-55694ef43fd4?q=80&w=1818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1619260584294-8a4e63f5ade5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="infoBox">
            <div className='cardContainer'>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80? RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
                        title="green iguana" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}&nbsp;
                           {info.humidity>80?<ThunderstormIcon/>:info.temp>15?<Brightness4Icon/>:<AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <div><b>Temperature</b>  {info.temp}&deg;C</div>
                            <div><b>TempMaximum</b>  {info.tempMax}&deg;C</div>
                            <div><b>TempMinimum</b>  {info.tempMin}&deg;C</div>
                            <div><b>Humidity</b>  {info.humidity}</div>
                            <p>The Weather Can be Described as <i>{info.weather} </i>feels like {info.feelsLike}&deg;C </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}