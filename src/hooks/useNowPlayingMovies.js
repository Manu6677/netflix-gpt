import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { OPTIONS_API, fetchMovieURL } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const data = await fetch(fetchMovieURL, OPTIONS_API);
    const json = await data.json();
    // console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default useNowPlayingMovies;
