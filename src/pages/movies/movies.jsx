import React from 'react'
import { MultimediaList } from '../../components/multimedia-list/multimedia-list';

const MoviesPage = ({multimedia}) => {
  return (
    <div>
      <MultimediaList multimedia={multimedia}/>
    </div>
  )
}

export default MoviesPage;