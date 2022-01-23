import React from "react";

const MovieRows = ({title, items}) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="movieRowAreaList">
        {items.results && items.results.map((item, key) => (
          <img
            key={key}
            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
            alt={item.original_title}
          />
        ))}
      </div>
    </div>
  )
}

export default MovieRows;
