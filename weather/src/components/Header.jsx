import "./Header.css";
import { getKorean } from "../util/getKoreanName";
import { getDay } from "../util/getDay";
import { useState, useEffect } from "react";

// 도시를 인수로 받아와야함
const Header = ({ onChangeDay, city }) => {
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState(1);

  /*
  도시명이 바뀔 경우
  날씨를 오늘로 세팅
  */
  useEffect(() => {
    setDate(new Date());
    setDay(1);
  }, [city]);

  const onClickButton = (e) => {
    const today = new Date();
    if (e.target.value === "1") {
      setDate(today);
      setDay(1);
    } else if (e.target.value === "2") {
      setDate(
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
      );
      setDay(2);
    } else if (e.target.value === "3") {
      setDate(
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2),
      );
      setDay(3);
    }
    onChangeDay(e.target.value);
  };

  return (
    <div className="Header">
      <div className="Header_title">{getKorean(city)}의 날씨</div>
      <div className="button_wrapper">
        <button onClick={onClickButton} className="btn" value="1">
          오늘
        </button>
        <button onClick={onClickButton} className="btn" value="2">
          내일
        </button>
        <button onClick={onClickButton} className="btn" value="3">
          모레
        </button>
        <div className="date">
          {day === 1 ? "오늘" : day === 2 ? "내일" : "모레"}{" "}
          {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일{" "}
          {getDay(date.getDay())}
        </div>
      </div>
    </div>
  );
};

export default Header;
