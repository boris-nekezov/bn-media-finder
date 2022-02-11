import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_SITE, API_KEY } from '../../constants/api';

const MovieDetails = ({ movieId }) => {
  const [movieInfo, setMovieInfo] = useState({});
  let params = useParams();
  console.log('[params in MovieDetails]', params);
  console.log('[params in MovieDetails]', params.movieId);
  console.log('$$$$$$$FETCH URl', `${API_SITE}/?i=${params.movieId}&apikey=${API_KEY}`)
  useEffect(() => {
    fetch(`${API_SITE}/?i=${params.movieId}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(response => {
        console.log('###########MovieDetails response HERE>>:', response);
        setMovieInfo(response)
      })
  }, [movieId] )
  
  return (
    <div>
      <h1>MovieDetails</h1>
      <h2>movieID: {movieId}</h2>
      <h2>Title: {movieInfo.Title}</h2>
			<img
        src={movieInfo.Poster}
        alt={movieInfo.Title}
        className="multimedia-list__img"
        style={{ height: "400px", width: "auto"}}
      />
      <h2>Year: {movieInfo.Year}</h2>
      <h2>Rated: {movieInfo.Rated}</h2>
      <h2>Released: {movieInfo.Released}</h2>
      <h2>Runtime: {movieInfo.Runtime}</h2>
      <h2>Actors: {movieInfo.Actors}</h2>
      <h2>BoxOffice: {movieInfo.BoxOffice}</h2>
      <h2>Country: {movieInfo.Country}</h2>
      <h2>DVD: {movieInfo.DVD}</h2>
      <h2>Director: {movieInfo.Director}</h2>
      <h2>Genre: {movieInfo.Genre}</h2>
      <h2>Language: {movieInfo.Language}</h2>
      <h2>Metascore: {movieInfo.Metascore}</h2>
      <h2>Plot: {movieInfo.Plot}</h2>
      <h2>Production: {movieInfo.Production}</h2>
      {/*//TODO FIX THAT  */}
      {/* {movieInfo.Ratings.map(({ Source,Value }) => (
        <div>
          <h2>Sorce: {Source}</h2>
          <h2>Value: {Value}</h2>
        </div>
      ))} */}
      <h2>Rated: {movieInfo.Rated}</h2>
      <h2>Type: {movieInfo.Type}</h2>
      <h2>Website: {movieInfo.Website}</h2>
      <h2>Writer: {movieInfo.Writer}</h2>
      <h2>imdbRating: {movieInfo.imdbRating}</h2>
      <h2>imdbVotes: {movieInfo.imdbVotes}</h2>
    </div>
  )
}

export default MovieDetails;