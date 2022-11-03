import { useState, useEffect } from "react";
import axios from "axios";
import Nevado from "./assets/img/cielo-despejado.jpeg";
import Nevado1 from "./assets/img/imagen-clima.jpeg";
import "./App.css";
import Navbar from "./components/Navbar";
/* import Input from "./components/Input"; */
import Loading from "./components/Loading";
import Celsius from "./assets/img/celsius-change-button.webp";

function App() {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [centigrades, setCentigrades] = useState(true);

  const onChange = (e) => {
    const value = e.target.value;

    if (value !== "") {
      setCity(value);
    }
  };

  const onSubmit = (e) => {
    e?.preventDefault();
    console.log({ city });
    if (city === " " || !city) return;

    document.tittle = city;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dece001f6275d570851fbab7b7a683ac`
      )
      .then((res) => {
        setWeather(res.data);
      });
  };

  const changeBackground = () => {
    console.log(weather.main?.temp);
  };

  useEffect(() => {
    const success = (pos) => {
      let lon = pos.coords.longitude;
      let lat = pos.coords.latitude;
      console.log("hola...");
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dece001f6275d570851fbab7b7a683ac`
        )
        .then((res) => setWeather(res.data));
      setLoading(false);
    };
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  console.log(weather);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="containerWeather">
          <div className="navBar">
            <div className="txt_view actionTxtType3">
              <div className="view_tit">{weather.name}</div>
              <div className="line_bg"></div>
              <div className="view_txt">
                <h3>
                  State of the weather: <br />{" "}
                  {weather.weather?.[0].description}{" "}
                </h3>
                <img
                  className="imageWeather"
                  src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
                  alt="Imagen actual"
                />
                <h3>Country "{weather.sys?.country}" </h3>

                <h5>
                  Humidity: {weather.main?.humidity}
                  {"%"}{" "}
                </h5>
              </div>
            </div>
          </div>
          <div className="containerCard">
            <div className="inputGroup">
              <form onSubmit={onSubmit}>
                <input
                  onChange={/* (e) => setCity(e.target.value) */ onChange}
                  type="text"
                  placeholder="Add a city"
                  id="search"
                  autoComplete="off"
                />
                <label htmlFor="search">
                  <span className="icon">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAkxJREFUaEPtmW1OA0EIhqcnU0+mnkw9mQazJFMGhpePWjdp/zRpdxgehhfY3cs4+edycv/HA+DeJ9h5As8HzOsExb99Hr99Hd9vXeAdAOTM0xiDnUV9IygCKsFUAGjjOdqo49p171mQDABF+qPi7WZtGCQK0Bl1iyMEEQHodp4ctVIQhkABup2n6PPelm0IAgG4hfPSuTSEB3AL5+fozzqwisPLGIP7yKIbD+C7udqQIxR9yyELwvRzB9AVfS9IMkYahKmHnfGu6EcBCEgLnmrHMt4VfSvfkcyUAVRPwQKgThudbVpHhKPbzz6QbkjQVx8L4J7pww5qWlgqkgYg04enxsjg5lUbJIXoGpkJKQDOPVQXGdFaQFowr9JI20xSz+JBIDoBZBotOkAA5LF5EHcHkAJGdDKnQCcA2d36o22GAFjNplL3LR2EAVzlTzvBHRMtO8p1M0CLBuQemZ4BzfpHM51vX/8NAAdhOyorM9ECrmnALV3iCDInwCbU8WCToikAT5gVgKjtJeDoMLfLWa8vePpFJ+LQMOe2cOFVBQIdKEPjtNZAvMpRgSDb3FusHhO6obGMRKuGlz7a/9rzotQtpXYKXtXYdegMDK9J3dTTYu2m4q8htqmLDF5WbnvpVC2vFEBPd/ArpsyTsyqA67zXRGTO7qqMtlkFAHI+CoAIlMsh6ST7DgF2PgOAQFSqjaerxTYiYsuhSuOSNkNRnxdXANjOaV/yaSfDbxzprSX3Efqen0bPOqmk2+/ajhMoO1Ex8ACoRK9j7elP4Aff3ZcxkrqwbwAAAABJRU5ErkJggg=="
                      width="20"
                    />
                  </span>
                  City
                </label>
                <button
                  className="search"
                  type="submit"
                  onClick={changeBackground}
                >
                  Search
                </button>
              </form>
            </div>
            <div className="box actionImg2">
              <img src={Nevado1} alt="" />
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.7047385964!2d-81.7006977!3d12.58475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres%2C%20Reino%20Unido!5e0!3m2!1ses!2sco!4v1667335419352!5m2!1ses!2sco"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
              <div className="hover">
                <div className="sub_tit">
                  {/*   <h3>Country "{weather.sys?.country}" </h3>
                <h4>Temp: {weather.main?.temp} </h4>
                <div className="containerTemp">
                  <h5>
                    Temp min:{" "}
                    <span className="tempMin">{weather.main?.temp_min}°</span>
                  </h5>
                  <h5>
                    Temp max:{" "}
                    <span className="tempMax">{weather.main?.temp_max}°</span>
                  </h5>
                </div>
                <h5>Humidity: {weather.main?.humidity} </h5> */}
                  <div>
                    <button
                      className="changeTemp"
                      onClick={() => setCentigrades(!centigrades)}
                    >
                      °C / K°
                    </button>
                    <h1>
                      Temp:{" "}
                      {centigrades
                        ? weather.main?.temp_min
                        : Math.ceil(weather.main?.temp - 273.1)}
                      {centigrades ? "°K" : "°C"}
                    </h1>
                  </div>
                  <div className="containerTemp">
                    <h3>
                      Temp min:{" "}
                      <span className="tempMin">
                        {centigrades
                          ? weather.main?.temp_min
                          : Math.ceil(weather.main?.temp_min - 273.1)}
                        {centigrades ? "°K" : "°C"}
                      </span>
                    </h3>
                    <h3>
                      Temp max:{" "}
                      <span className="tempMax">
                        {centigrades
                          ? weather.main?.temp_max
                          : Math.ceil(weather.main?.temp_max - 273.1)}
                        {centigrades ? "°K" : "°C"}
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
