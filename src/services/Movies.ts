import api from '@/api/api';

const imageURL = 'https://image.tmdb.org/t/p/w500';

const getTrendingMovies = async (
    type: string = 'all',
    time: string = 'week'
) => {
    // https://developer.themoviedb.org/reference/intro/getting-started
    // no le paso toda la url,
    // api es la instancia de axiso que ya tiene la url base
    const response = await api.get(`/trending/${type}/${time}`);
    console.log('Response:', response);
    return response.data;
};

const getSingleMovie = async (type: string = 'movie', id: number) => {
    // request endpoint =>  https://api.themoviedb.org/3/movie/{movie_id}
    const response = await api.get(`/${type}/${id}`);
    return response.data;
};

// para importar
// import Movies from '@/services/Movies.ts';
export default {
    getTrendingMovies,
    imageURL,
    getSingleMovie
};
