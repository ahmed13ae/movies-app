import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../../api/movies";
import { axiosInstance } from "../../api/config";


export const fetchMovies=createAsyncThunk("moviesSlice/fetchMovies",async()=>{
    const res=await getMovies(`movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`)
    const data=await res.data.results;
    return data
})
export const searchMovies = createAsyncThunk(
    "moviesSlice/searchMovies",
    async (query) => {
      const res = await axiosInstance.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${query}`);
      return res.data.results;
    }
  );
const moviesSlice=createSlice({
    name:"moviesSlice",
    initialState:[],
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchMovies.fulfilled,(state,action)=>{
            const watched=false;
            const movies=action.payload.map((movie)=>{
                return {...movie,watched}
            })
            return movies
        }).addCase(searchMovies.fulfilled, (state, action) => {
            const watched = false;
            const movies = action.payload.map((movie) => {
              return { ...movie, watched };
            });
            return movies;
          });
    }
    
})

export const {}=moviesSlice.actions;

export default moviesSlice.reducer;