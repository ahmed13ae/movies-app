import { configureStore } from "@reduxjs/toolkit";

import moviesSlice from "./slices/moviesSlice";
import watchListSlice from "./slices/watchListSlice";

export const store=configureStore({
    reducer:{
        movies:moviesSlice,
        watchList:watchListSlice
       
    }
})