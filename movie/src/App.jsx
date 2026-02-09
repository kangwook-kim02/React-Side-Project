import './App.css'
import { searchMovies } from './api/searchMovies'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("짱구는 못말려");
  const [totalPage, setTotalPage] = useState();


  /*
  API 호출
  */
  useEffect(() => {
    const getMovie = async () => {
      const result = await searchMovies(query, page);
      console.log(result);
      setTotalPage(result.total_pages);
      setData(result.results);
    }
    getMovie();
  }, [query, page]);

  /*
  검색 기능
  검색했을 때, 페이지를 1페이지로 설정
  */
  const onClickButton = (search) => {
    setPage(1);
    setQuery(search);
  }

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home data={data} onClickButton={onClickButton} page={page} setPage={setPage} totalPage={totalPage} />} />
          <Route path='/movie/:id' element={<Movie data={data} />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
