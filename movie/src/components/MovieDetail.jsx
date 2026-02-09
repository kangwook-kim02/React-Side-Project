import "./MovieDetail.css";

const MovieDetail = ({ data }) => {
    const base_poster_url = import.meta.env.VITE_TMDB_POSTER_MOVIEDETAIL_URL;

    return <div className="MovieDetail">
        <div className="poster_wrapper">
            <img src={`${base_poster_url}/${data.poster_path}`} alt="포스터" />
        </div>
        <div className="info">
            <div className="flag flag_title">영화제목</div>
            <div className="MovieTitle">
                <h3>{data.title}</h3>
            </div>
            <div className="flag flag_overview">줄거리</div>
            <div className="overview_wrapper">
                <p>{data.overview}</p>
            </div>
            <div className="flag flag_vote">평가</div>
            <div className="vote_wrapper">
                <div>평점⭐{(data.vote_average).toFixed(2)}({data.vote_count})</div>
            </div>
            <div className="flag flag_release">개봉일</div>
            <div className="release_wrapper">
                <div className="release">
                    {data.release_date}
                </div>
            </div>
        </div>
    </div>
}

export default MovieDetail