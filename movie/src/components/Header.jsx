import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = ({ onClickButton, setPage }) => {
    const nav = useNavigate();
    const [search, setSearch] = useState("");

    const onChangeInput = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className="Header">
            <div className="title">
                <h3 onClick={() => {
                    setPage(1);
                    nav("/");
                }}>영화모아</h3>
            </div>
            <div className="search_wrapper">
                <input onKeyDown={(e) => {
                    if (e.key == 'Enter') onClickButton(search);
                }} type="text" value={search} onChange={onChangeInput} placeholder="검색할 영화를 입력하세요." />
                <button onClick={() => {
                    onClickButton(search);
                }}>⌕</button>
            </div>
        </div>
    )
}

export default Header