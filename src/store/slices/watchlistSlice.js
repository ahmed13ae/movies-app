import { createSlice } from "@reduxjs/toolkit";

export const watchListSlice=createSlice({
    name:"watchListSlice",
    initialState:[],
    reducers:{
        addTolist: (state, action) => {
            const foundMovie = state.find(
              (movie) => movie.id === action.payload.id
            );
            if (!foundMovie) {
                state.push(action.payload);
            }
          },
        removeFromList:(state,action)=>{
           return state.filter((movie)=>movie.id!==action.payload.id)
        },
        clear:(state,action)=>{
           return []
        }
    }

})

export const {addTolist,removeFromList,clear}=watchListSlice.actions;

export default watchListSlice.reducer;