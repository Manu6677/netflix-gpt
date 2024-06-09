import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovieVideo } from "../utils/moviesSlice";
import { OPTIONS_API } from '../utils/constants'


const useNowPlayingMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    console.log("custom hook")
    // Hit the API and get the trailer portion out of it.

    const getMovieVideos = async () => {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, OPTIONS_API)
      const jsonData = await data.json();
      console.log(jsonData);
    
      const filterData = jsonData.results?.filter(video => video.type === "Trailer");
      const trailer = filterData?.length ? filterData[0] : jsonData.results[0];
      console.log(trailer);
      dispatch(addNowPlayingMovieVideo(trailer));
    }
    
    useEffect(() => {
      getMovieVideos();
    }, [])
}
export default useNowPlayingMovieTrailer;
