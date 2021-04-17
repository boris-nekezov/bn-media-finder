import './App.css';
import React, { useState } from 'react';
import { SearchBox } from './components/search-box/search-box.component';
import { MultimediaList } from './components/multimedia-list/multimedia-list.component';
import { API_KEY } from './constants/api';
import { API_SITE } from './constants/api';
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
			<div class="content">
				<h1>BN Media Finder</h1>
				<SearchBox
					placeholder="search multimedia"
					handleChange={e => searchMultimedia(e)}
				/>
				{multimedia && <MultimediaList multimedia={multimedia} />}
			</div>
			<footer class="footer">
				<h3>Code and Design by Boris Nekezov © 2021. All Rights Reserved</h3>
			</footer>
		</div>
	);
}

export default App;
