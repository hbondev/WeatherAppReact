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
    
  }

  return (
    <div>
      <h1>Weather</h1>
      <input type="text" onChange={(e)=>setCity(e.target.value)}  value={city} />
      <button onClick={getData}>Get Data</button>
    </div>
  );
}