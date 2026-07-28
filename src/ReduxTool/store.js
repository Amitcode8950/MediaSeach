import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./featres/searchSlice";
import collectionReducer from "./featres/collectionslice";

export const store =configureStore({
    reducer:{
        search:searchReducer,
        collection:collectionReducer
    }
})
