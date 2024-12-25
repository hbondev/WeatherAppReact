import axios from "axios";
import { useState } from "react";

export default function Weather() {
  const[city,setCity]= useState('');
  

  return (
    <div>
      <h1>Weather</h1>
      <input type="text" onChange={(e)=>setCity(e.target.value)}  value={city} />
      <button onClick={""}>Get Data</button>
    </div>
  );
}