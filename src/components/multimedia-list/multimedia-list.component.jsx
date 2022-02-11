import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import './multimedia-list.styles.css';

export const MultimediaList = ({ multimedia }) => {
	let params = useParams();
	console.log('params:>>', params)
	console.log('proverka:>>', ("movieId" in params));

	const hasMovieId = params => "movieId" in params;

	return (
		<>
			{!hasMovieId(params) && <div className="multimedia-list">
				{multimedia.map(item => (
					<Link 
						className="multimedia-list__item" 
						key={item.imdbID}
						to={`${item.imdbID}`}
					>
							<h2>{item.Title}</h2>
							<p>{item.Type}</p>
							<p>{item.Year}</p>
							<img
								src={item.Poster}
								alt={item.Title}
								className="multimedia-list__img"
							/>
		
					</Link>
				))}
			</div>}
			<Outlet />
		</>
	)

}