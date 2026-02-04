import './App.css'
import Header from './components/Header'
import WeatherInfo from './components/WeatherInfo'
import Footer from './components/Footer';
import { useEffect, useState } from "react";
import { getCurrentWeather } from "./api/weather";
function App() {

  const [data, setData] = useState();
  const [city, setCity] = useState("incheon");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const result = await getCurrentWeather(city);
        setData(result);
      } catch (e) {
        console.error(e);
      }
    };
    fetchWeather();

  }, [city])

  const onChangeCity = (e) => {
    setCity(e.target.value);
  }

  return (
    <>
      <Header city={city} />
      <WeatherInfo data={data} />
      <Footer onChangeCity={onChangeCity} />
    </>
  )
}

export default App
