import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../../api/movies";
import { axiosInstance } from "../../api/config";

const initialState = {
  movies: [],
  page: 1,
  totalPages: 0,
  totalResults: 0,
};

export const fetchMovies = createAsyncThunk(
  "moviesSlice/fetchMovies",
  async (page = 1) => {
    const res = await getMovies(
      `movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`
    );
    const moviesWithWatched = res.data.results.map((movie) => ({
      ...movie,
      watched: false, 
    }));
    return { ...res.data, results: moviesWithWatched };
  }
);

export const searchMovies = createAsyncThunk(
  "moviesSlice/searchMovies",
  async ({ query, page = 1 }) => {
    const res = await axiosInstance.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${query}&page=${page}`
    );
    const moviesWithWatched = res.data.results.map((movie) => ({
      ...movie,
      watched: false, // Add the watched property with an initial value of false
    }));
    return { ...res.data, results: moviesWithWatched };
  }
);

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    toggleWatched: (state, action) => {
        state.movies = state.movies.map((movie) => {
          if (movie.id === action.payload) {
            return { ...movie, watched: !movie.watched };
          }
          return movie;
        });
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload.results;
        state.page = action.payload.page;
        state.totalPages = action.payload.total_pages;
        state.totalResults = action.payload.total_results;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.movies = action.payload.results;
        state.page = action.payload.page;
        state.totalPages = action.payload.total_pages;
        state.totalResults = action.payload.total_results;
      });
  },
});
export const { toggleWatched } = moviesSlice.actions;
export default moviesSlice.reducer;