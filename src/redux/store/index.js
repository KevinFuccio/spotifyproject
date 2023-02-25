import { configureStore,combineReducers } from "@reduxjs/toolkit";
import {songsReducer} from "../reducers/songsReducer"
import {albumReducer} from "../reducers/albumReducer"

const rootReducer = combineReducers({
    songs: songsReducer,
    album: albumReducer
})

export const store = configureStore({
    reducer: rootReducer
})
