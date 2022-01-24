import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb';
import MovieRows from './components/MovieRows';
import FeaturedMovie from './components/FeaturedMovie'
import './App.css' 

const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() => {
    const loadingAllreq = async () => {
      // get all list 
      let list = await Tmdb.getHomeList()
      setMovieList(list);

      // pegando filme em destaque
      let originals = list.filter(e => e.slug === 'originals')
      let randonFilter = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randonFilter]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
    }
    loadingAllreq()
  }, [])

  return (
    <div className='pageHomeMovies'>
      {featuredData && 
        <FeaturedMovie item={featuredData}/> 
      }
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
