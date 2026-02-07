import Header from "../components/Header";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

const Home = ({ data, onClickButton, page, setPage }) => {
    return (
        <div className="Home">
            <Header onClickButton={onClickButton} setPage={setPage} />
            <MovieList data={data} />
            <Footer page={page} setPage={setPage} data={data} />
        </div>

    )
}

export default Home;