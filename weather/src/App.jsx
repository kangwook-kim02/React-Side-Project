import "./App.css";
import Header from "./components/Header";
import WeatherInfo from "./components/WeatherInfo";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { getCurrentWeather, getListWeather } from "./api/weather";
function App() {
  const [data, setData] = useState(); // 보낼 날씨 데이터
  const [today, setToday] = useState(); // 오늘 날씨 정보
  const [tomorrow, setTomorrow] = useState(); // 내일 날씨 정보
  const [tomorrowDouble, setTomorrowDouble] = useState(); // 모레 날씨 정보
  const [city, setCity] = useState("incheon"); // 도시 정보

  // 오늘
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const result = await getCurrentWeather(city);
        setToday(result);
        setData(result); // 도시가 바뀔 때마다 오늘로 초기화
      } catch (e) {
        console.error(e);
      }
    };
    fetchWeather();
  }, [city]);

  // 내일
  useEffect(() => {
    const fetchListWeather = async () => {
      try {
        const result = await getListWeather(city);

        // 내일 설정
        const tomorrow = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate() + 1,
        );

        const tomorrowGetYear = tomorrow.getFullYear();
        let tomorrowGetMonth = tomorrow.getMonth() + 1;
        if (tomorrowGetMonth < 10) {
          tomorrowGetMonth = "0" + tomorrowGetMonth;
        }
        let tomorrowGetDate = tomorrow.getDate();
        if (tomorrowGetDate < 10) {
          tomorrowGetDate = "0" + tomorrowGetDate;
        }

        const dt_txt = `${tomorrowGetYear}-${tomorrowGetMonth}-${tomorrowGetDate} 12:00:00`;
        const tomorrowData = result.list.find((item) => {
          return String(dt_txt) === String(item.dt_txt);
        });
        setTomorrow(tomorrowData);
      } catch (e) {
        console.error(e);
      }
    };

    fetchListWeather();
  }, [city]);

  // 모레
  useEffect(() => {
    const fetchListWeather = async () => {
      try {
        const result = await getListWeather(city);

        // 모레 설정
        const dayAfterTomorrow = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate() + 2,
        );

        const dayAfterTomorrowGetYear = dayAfterTomorrow.getFullYear();
        let dayAfterTomorrowGetMonth = dayAfterTomorrow.getMonth() + 1;
        if (dayAfterTomorrowGetMonth < 10) {
          dayAfterTomorrowGetMonth = "0" + dayAfterTomorrowGetMonth;
        }
        let dayAfterTomorrowGetDate = dayAfterTomorrow.getDate();
        if (dayAfterTomorrowGetDate < 10) {
          dayAfterTomorrowGetDate = "0" + dayAfterTomorrowGetDate;
        }

        const dt_txt = `${dayAfterTomorrowGetYear}-${dayAfterTomorrowGetMonth}-${dayAfterTomorrowGetDate} 12:00:00`;
        const tomorrowDoubleData = result.list.find((item) => {
          return String(dt_txt) === String(item.dt_txt);
        });
        setTomorrowDouble(tomorrowDoubleData);
      } catch (e) {
        console.error(e);
      }
    };

    fetchListWeather();
  }, [city]);

  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  const onChangeDay = (value) => {
    if (Number(value) === 1) {
      setData(today);
    } else if (Number(value) === 2) {
      setData(tomorrow);
    } else if (Number(value) === 3) {
      setData(tomorrowDouble);
    }
  };

  return (
    <>
      <Header onChangeDay={onChangeDay} city={city} />
      <WeatherInfo data={data} />
      <Footer onChangeCity={onChangeCity} />
    </>
  );
}

export default App;
