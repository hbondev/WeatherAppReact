import axios from "axios";
import { useEffect } from "react";

export default function Weather() {
  

  return (
    <div>
      <h1>Weather</h1>
      <input type="text" onChange={(e)=>inputHandler(e)}  />
      <button>Get Data</button>
    </div>
  );
}