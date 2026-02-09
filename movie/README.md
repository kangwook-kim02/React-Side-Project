## 영화검색앱 - 영화모아
원하는 영화를 검색하고, 해당 영화의 상세사항(제목,줄거리,평점 등)을 확인할 수 있다. 

## TMDB API 연습
- axios 라이브러리를 이용한 API 호출

## 파일 설명
- src/api/tmdb.js: 여러 API 함수를 만들어야하는 상황에 대한 확장성 고려로, 동일한 axios 객체를 생성 함수
- src/api/searchMovies.js: query(=검색할 영화 제목), page(=가져올 데이터의 페이지)를 파라미터로 갖는 API 호출 함수
- src/componets/*.jsx: Header, MovieList, MovieItem, Footer 컴포넌트
- src/pages/*.jsx: 필요한 페이지

## 핵심 구현
- 라우터 기능을 이용하여, "/"의 경우 "Home" component를 반환, Home에서 영화 검색을 할 수 있음
- 라우터 기능일 이용하여, "/movie/:id"의 경우 data state에 저장된 영화 리스트 중 id와 동일한 영화의 상세정보를 확인할 수 있음
- map 함수를 활용하여 MovieItem을 return
- filter 함수를 사용하여, URL의 id와 원소의 id가 동일한 경우 해당 배열의 원소를 return

## UI
<img src="./assests/movie.gif">
