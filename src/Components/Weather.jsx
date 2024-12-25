import axios from "axios";
import { useState } from "react";

export default function Weather() {
  const[city,setCity]= useState('');
  const[Error,setError]=useState('');
  
  const getData = async ()=>{
    if(!city){
      setError('Please Enter a city name');
      return;
    }
    try{
      const apiKey = 'c046612a0ea6bccddab3e81e2ebaf2a9';
      const Res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    }
    catch{

    }
    
  }

  return (
    <div>
      <h1>Weather</h1>
      <input type="text" onChange={(e)=>setCity(e.target.value)}  value={city} />
      <button onClick={getData}>Get Data</button>
    </div>
  );
}