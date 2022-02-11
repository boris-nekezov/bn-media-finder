import React from 'react'
import { MultimediaList } from '../../components/multimedia-list/multimedia-list.component';

const MoviesPage = ({multimedia}) => {
  return (
    <div>
      <h1>MoviesPage</h1>
      <MultimediaList multimedia={multimedia}/>
    </div>
  )
}

export default MoviesPage;