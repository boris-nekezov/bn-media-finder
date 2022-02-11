import './App.css';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SearchBox } from './components/search-box/search-box.component';
import { MultimediaList } from './components/multimedia-list/multimedia-list.component';
import { API_KEY } from './constants/api';
import { API_SITE } from './constants/api';
import MoviesPage from './pages/movies/movies';

function App() {
	const [multimedia, setMultimedia] = useState([]);

	const searchMultimedia = e => {
		console.log(`${API_SITE}/?s=${e.target.value}&apikey=${API_KEY}`)
		fetch(`${API_SITE}/?s=${e.target.value}&apikey=${API_KEY}`)
			.then(response => response.json())
			.then(response => {
				// console.log('response:>>', response);
				if (response.Response) {
					setMultimedia(response.Search);
				}
			});

		// todo make it dynamic
		const movieImdbId = 'tt2488496';
		fetch(`${API_SITE}/?i=${movieImdbId}&apikey=${API_KEY}`)
			.then(response => response.json())
			.then(response => {
				// console.log('dsadsa>>:', response);
			})
		// todo make a function that makes request on movie click
		// and go to dynamic rooute which fetch by the imdb id
		// and shows more detailed information
	};

	return (
		<div className="App">
			<div className="content">
				<h1>BN Media Finder</h1>
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
