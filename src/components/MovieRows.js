import React from "react";
import './MovieRow.css'

const MovieRows = ({title, items}) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRowAreaList">
        <div className="movieRowList">
        {items.results && items.results.map((item, key) => (
          <div
            className="movieRowItem"
            key={key}
          >
            <img
              key={key}
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={item.original_title}
            />
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default MovieRows;
