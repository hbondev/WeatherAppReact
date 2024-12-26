import styles from '../Components/WeatherIcons.module.css';
import windIcon from '../assets/iconsWeather/windy.png';
import rainIcon from '../assets/iconsWeather/rainy-day.png';
import mistIcon from '../assets/iconsWeather/mist.png';
import hailIcon from '../assets/iconsWeather/Clouds.png';
import climateIcon from '../assets/iconsWeather/climate.png';
import sunIcon from '../assets/iconsWeather/sun.png';
import snowIcon from '../assets/iconsWeather/snow.png';
import CloudIcon from '../assets/iconsWeather/Clouds.png';


export default function WeatherIcons({prob}){
   
   const weather = {
      wind :windIcon,
      Rain :rainIcon,
      Mist :mistIcon,
      Fog :hailIcon,
      Haze :hailIcon,
      climate:climateIcon,
      sun : sunIcon,
      snow : snowIcon,
      windy:windIcon,
      Clear:sunIcon,
      Clouds:CloudIcon

   }
   
   const iconSrc = weather[prob]  ; 
      return<>
      <img src={iconSrc} className={styles.iconweather} ></img>
      </>
}