import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb';
import MovieRows from './components/MovieRows';
import './App.css' 

const App = () => {

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
    <div className='pageHomeMovies'>
      <section className='lists'>
        {movieList && movieList.map((item, key) => (
          <div
          key={`${item.slug}-${key}`}
          >
            <MovieRows
              title={item.title}
              items={item.items}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
