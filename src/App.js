import './App.css';
import React, { useState } from 'react';
import { SearchBox } from './components/search-box/search-box';
import { API_KEY } from './constants/api';
import { API_SITE } from './constants/api';
import MoviesPage from './pages/movies/movies';

function App() {
	const [multimedia, setMultimedia] = useState([]);

	const searchMultimedia = e => {
		fetch(`${API_SITE}/?s=${e.target.value}&apikey=${API_KEY}`)
			.then(response => response.json())
			.then(response => {
				if (response.Response) {
					setMultimedia(response.Search);
				}
			});
	};

	return (
		<div className="App">
			<div className="content">
				<div className="header">
					<h1>BN Media Finder</h1>
					<h2>Search your movie here</h2>
					<h3>Important: <small>You must write exact name of the movie!</small></h3>
				</div>
				<SearchBox
					placeholder="search multimedia"
					handleChange={e => searchMultimedia(e)}
				/>
				{multimedia && <MoviesPage multimedia={multimedia}/>}
			</div>
			<footer className="footer">
				<h3>Code and Design by Boris Nekezov © 2022. All Rights Reserved</h3>
			</footer>
		</div>
	);
}

export default App;
