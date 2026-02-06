import "./WeatherInfo.css";

const WeatherInfo = ({ data }) => {
  if (!data) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="WeatherInfo">
      <div className="img_wrapper">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="날씨 이미지"
        />
      </div>
      <div className="weather_wrapper">
        <div className="temperate">{Math.round(data.main.temp)}°</div>
        <div className="cur_state">{data.weather[0].description}</div>
      </div>
      <div className="sideInfo_wrapper">
        <div className="feel">체감 {Math.round(data.main.feels_like)}°</div>
        <div className="humidity">습도 {Math.round(data.main.humidity)}%</div>
        <div className="wind">풍속 {Math.round(data.wind.speed)}m/s</div>
      </div>
    </div>
  );
};

export default WeatherInfo;
