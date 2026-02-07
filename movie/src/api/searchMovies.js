import { tmdb } from "./tmdb";

export async function searchMovies(query, page = 1) {
  const res = await tmdb.get("/search/movie", {
    params: { query, page, include_adult: false },
  });
  return res.data;
}
