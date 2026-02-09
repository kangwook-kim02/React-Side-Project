import MovieHeader from "../components/MovieHeader"
import MovieDetail from "../components/MovieDetail";
import MovieFooter from "../components/MovieFooter";
import { useParams } from "react-router-dom";

const Movie = ({ data }) => {
    const param = useParams();
    const filteredData = data.filter((item) => {
        return Number(item.id) === Number(param.id);
    })
    return <div>
        <MovieHeader />
        <MovieDetail data={filteredData[0]} />
        <MovieFooter />
    </div>
}

export default Movie