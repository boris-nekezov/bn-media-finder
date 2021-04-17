import React from 'react';
import './multimedia-list.styles.css';

export const MultimediaList = ({ multimedia }) => (
	<div className="multimedia-list">
		{multimedia.map(item => (
			<div className="multimedia-list__item" key={item.imdbID}>
				<h2>{item.Title}</h2>
				<p>{item.Type}</p>
				<p>{item.Year}</p>
				<img
					src={item.Poster}
					alt={item.Title}
					className="multimedia-list__img"
				/>
			</div>
		))}
	</div>
);
