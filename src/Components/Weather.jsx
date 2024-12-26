import axios from "axios";
import {  useState } from "react";
import WeatherIcons from "./WeatherIcons";
import styles from '../Components/Weather.module.css';



export default function Weather() {
  const[city,setCity]= useState('');
  const[Error,setError]=useState('');
  const[Weather,setWeather]=useState([]);


  const getData = async ()=>{
    if(!city){
      setError('Please Enter a city name');
      return;
    }
    try{
      const apiKey = 'c046612a0ea6bccddab3e81e2ebaf2a9';
      const Res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeather([Res.data]);
      setError('');

    }
    catch(err){
      setError('city not found !');
      setWeather[''];
    }
    
  }

  return (
    <>
      <h1>Weather</h1>
      <input type="text" onChange={(e)=>setCity(e.target.value)}  value={city} />
      <button onClick={getData}>Get Data</button>
      {Error && <p   style={{ color: 'red' }}>{Error}</p>}
      <ul >
        {Weather.map((data)=>{

          return (
          <li key={data.weather[0].id} className={styles.details}>
              {/* <img src={<WeatherIcons weather={data.weather[0].main}/>}></img> */}
            <WeatherIcons prob={data.weather[0].main}/>
            <div className={styles.container}><span className={styles.title}>Name of city :</span><span className={styles.sub}>{data.name}</span>
            </div>
            <div className={styles.container}><span className={styles.title}>Weather State :</span> <span className={styles.sub}>{data.weather[0].main}</span></div>
            <div className={styles.container}><span className={styles.title}>Weather Condition :</span><span className={styles.sub}>{data.weather[0].description}</span></div>
            <div className={styles.container}><span className={styles.title}>Temp :</span><span className={styles.sub}>{Math.floor(data.main.temp) +'°C'}</span></div>
            
           

          </li>
          );
        })}
      </ul>

      {/* { JSX } */}
    </>
  );
}