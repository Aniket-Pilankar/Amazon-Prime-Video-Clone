import React from 'react'
import './AllMovieList.css'
import Recommended from '../RecommendedMovies/Recommended'
import MiniVideoPlayer from '../MiniVideoPlayer/MiniVideoPlayer';
import PrimeVideoList from '../PrimeVideoList/PrimeVideoList';

const AllMovieList = () => {
  return (
    <div>
        <Recommended/>
        <MiniVideoPlayer/>
        <PrimeVideoList/>
    </div>
  )
}

export default AllMovieList