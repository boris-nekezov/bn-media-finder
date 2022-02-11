import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MovieDetails from '../../components/movie-details/movie-details';

const MoviePage = () => {
  let navigate = useNavigate();
  let params = useParams();

  return (
    <div>
      <h1>MoviePage</h1>
      <h2>Movies IMDB ID is : {params.movieId}</h2>
      <button 
        style={{
        fontSize: '30px'
      }}
      onClick={() => navigate('/')}>Go Back!</button>
      <MovieDetails  />
    </div>
  )
}

export default MoviePage;