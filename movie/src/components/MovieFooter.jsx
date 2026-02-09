import "./MovieFooter.css";
import { useNavigate } from "react-router-dom";

const MovieFooter = () => {
    const nav = useNavigate();

    return <div className="MovieFooter">
        <div className="Footer_wrapper">
            <button onClick={() => {
                nav(-1);
            }}>뒤로가기</button>
        </div>
        <div className="copy">Copyright 2026. 김강욱</div>
    </div>
}

export default MovieFooter;