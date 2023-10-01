import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../../api/movies";


export const fetchMovies=createAsyncThunk("moviesSlice/fetchMovies",async()=>{
    const res=await getMovies(`movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`)
    const data=await res.data.results;
    return data
})

const moviesSlice=createSlice({
    name:"moviesSlice",
    initialState:[],
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchMovies.fulfilled,(state,action)=>{
            const watched=false;
            const movies=action.payload.map((product)=>{
                return {...product,watched}
            })
            return movies
        })
    }
    
})

export const {}=moviesSlice.actions;

export default moviesSlice.reducer;