import "./MovieList.css";
import MovieItem from "./MovieItem";

const MovieList = ({ data }) => {
    if (!data) {
        return <div className="loading">로딩중...</div>
    }

    if (data.length === 0) {
        return <div className="notfound">찾으시는 영화가 없습니다.</div >
    }

    console.log(data);
    return (
        <div className="MovieList">
            {data.map((item) => {
                return <MovieItem key={item.id} id={item.id} title={item.title} overview={item.overview} vote_average={item.vote_average} vote_count={item.vote_count} poster_path={item.poster_path} />
            })}
        </div>
    );
}

export default MovieList;