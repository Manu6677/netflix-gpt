import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        nowPlayingMovieVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
           state.nowPlayingMovies = action.payload;
        },
        addNowPlayingMovieVideo: (state, action) => {
            state.nowPlayingMovieVideo = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addNowPlayingMovieVideo } = moviesSlice.actions;
export default moviesSlice.reducer;