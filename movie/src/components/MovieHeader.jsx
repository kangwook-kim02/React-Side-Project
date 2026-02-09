import "./MovieHeader.css";
import { useNavigate } from "react-router-dom";

const MovieHeader = () => {
    const nav = useNavigate();

    return (
        <div className="MovieHeader">
            <div className="title">
                <h3 onClick={() => {
                    nav(-1);
                }}>영화모아</h3>
            </div>
            <div>
                <h4>영화 자세히 보기</h4>
            </div>
        </div>
    )
}

export default MovieHeader