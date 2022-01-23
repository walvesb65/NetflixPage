const API_KEY = '4f9393f0fb530a51cfb79e4abd0c1e9f';
const API_BASE = 'https://api.themoviedb.org/3';

// O que vamos consultar...

// Originais da netiflix
// Recomendados
// Em Alta
// Ação
// Comédia 
// Terror 
// Romance 
// Documentarios

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const resonseJson = await req.json();
  return resonseJson;
}

export default {
    getHomeList: async () => {
      return [
        {
        slug: 'originais',
        title: 'Originais do Netiflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trendign',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trendign/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/toprated/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?without_genre=28&language=pt-BR&api_key=${API_KEY}`)
      },     
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?without_genre=35&language=pt-BR&api_key=${API_KEY}`)
      },      
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?without_genre=27&language=pt-BR&api_key=${API_KEY}`)
      }, 
      {
        slug: 'romance ',
        title: 'Romence',
        items: await basicFetch(`/discover/movie?without_genre=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary ',
        title: 'documentarios',
        items: await basicFetch(`/discover/movie?without_genre=99&language=pt-BR&api_key=${API_KEY}`)
      },
    ]
    }
}