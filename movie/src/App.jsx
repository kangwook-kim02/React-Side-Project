import './App.css'
import { searchMovies } from './api/searchMovies'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("짱구")

  useEffect(() => {
    const getMovie = async () => {
      const result = await searchMovies(query, page);
      setData(result.results);
    }
    getMovie();
  }, [query, page]);

  const onClickButton = (search) => {
    setPage(1);
    setQuery(search);
  }

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home data={data} onClickButton={onClickButton} page={page} setPage={setPage} />} />
          <Route path='/movie/:id' element={<Movie />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
