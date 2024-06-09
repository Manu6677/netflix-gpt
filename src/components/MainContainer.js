import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    console.log(movies)

    if (!movies) return; // this is early return 

    const mainMovie = movies[0];
    console.log(mainMovie)

  return (
      <div className='overflow-x-hidden'>
       {/* MainContainer 
          Video Background
          Title 
       */}
      
        <VideoTitle title={mainMovie.original_title} overview={mainMovie.overview} />
        <VideoBackground movieId={mainMovie.id} />        
      </div>
  )
}

export default MainContainer