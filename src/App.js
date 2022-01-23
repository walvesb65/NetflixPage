import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb';
import MovieRows from './components/MovieRows';

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadingAllreq = async () => {
      // get all list 
      let list = await Tmdb.getHomeList()
      setMovieList(list);
    }
    loadingAllreq()
  }, [])

  return (
    <div className='page'>
      <section className='lists'>
        {movieList.map((item, key) => (
          <div>
            <MovieRows
              key={key}
              title={item.title}
              items={item.items}
            />
          </div>
        ))}
      </section>
    </div>
  );
}
