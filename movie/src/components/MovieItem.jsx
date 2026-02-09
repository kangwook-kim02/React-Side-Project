import "./MovieItem.css";
import { useNavigate } from "react-router-dom";

const MovieItem = ({ id, title, overview, vote_average, vote_count, poster_path }) => {

    const base_poster_url = import.meta.env.VITE_TMDB_POSTER_URL;
    const nav = useNavigate();

    return (
        <div onClick={() => {
            nav(`/movie/${id}`); // 영화에 해당되는 id로 주소를 넘김
        }} className="MovieItem">
            <div className="poster_wrapper">
                <img src={`${base_poster_url}/${poster_path}`} alt="포스터" />
            </div>
            <div className="detail_wrapper">
                <h3 className="movie_title">{title}</h3>
                <p className="overview">{overview}</p>
            </div>
            <div className="vote_wrapper">
                <div className="vote">
                    평점
                </div>
                <div className="vote_average">
                    {`${(vote_average).toFixed(1)}(${vote_count})`}
                </div>
            </div>
        </div>
    )
}

export default MovieItem;