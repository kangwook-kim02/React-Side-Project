import axios from "axios";

// instance --> api를 여러개 사용할 수 있으므로 미리 axios 객체를 생성
export const tmdb = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_TOKEN}`,
  },
  params: {
    language: "ko-KR",
  },
});
