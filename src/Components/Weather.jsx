import axios from "axios";
import { useEffect } from "react";

export default function Weather() {
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts?id=1',
          })
            .then(function (response) {
              console.log(response)
            });
    }, []);
    function inputHandler(e) {
      console.log(e.target.value);
    }

  return (
    <div>
      <h1>Weather</h1>
      <input type="text" onChange={(e)=>inputHandler(e)}  />
    </div>
  );
}