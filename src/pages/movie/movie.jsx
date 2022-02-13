import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieDetails from '../../components/movie-details/movie-details';

const MoviePage = () => {
  let navigate = useNavigate();

  return (
    <div>
      <button 
        className="btn btn--main btn-big"
        onClick={() => navigate('/')}
      >Go Back</button>
      <MovieDetails  />
    </div>
  )
}

export default MoviePage;