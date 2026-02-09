import Header from "../components/Header";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

const Home = ({ data, onClickButton, page, setPage, totalPage }) => {
    return (
        <div className="Home">
            <Header onClickButton={onClickButton} setPage={setPage} />
            <MovieList data={data} />
            <Footer page={page} setPage={setPage} data={data} totalPage={totalPage} />
        </div>

    )
}

export default Home;