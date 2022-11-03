/* import axios from "axios";
import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=dece001f6275d570851fbab7b7a683ac`
      )
      .then((res) => setWeather(res.data));
  }, []);

  console.log(weather);

  return (
    <div>
      <h1>
        {}
      </h1>
    </div>
  );
};

export default Weather; */
