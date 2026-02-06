import axios from "axios"; // React에서 HTTP 메서드를 쓰게해주는 라이브러리

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const getCurrentWeather = async (city) => {
  const res = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
      lang: "kr",
    },
  });

  return res.data;
};

// 내일, 모레 날씨를 구하기 위해서
export const getListWeather = async (city) => {
  const res = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
      lang: "kr",
    },
  });

  return res.data;
};
