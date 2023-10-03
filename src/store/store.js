import { configureStore } from "@reduxjs/toolkit";

import moviesSlice from "./slices/moviesSlice";
import watchListSlice from "./slices/watchListSlice";
import movisCloneSlice from "./slices/movisCloneSlice";

export const store=configureStore({
    reducer:{
        movies:moviesSlice,
        watchList:watchListSlice,
        moviesClone:movisCloneSlice
       
    }
})