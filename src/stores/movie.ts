import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Movie } from '@/types/Movie';

import Movies from '@/services/Movies.ts';

// definimos el nombre de la store que contendra todo
export const useMovieStore = defineStore('movie', () => {
    //data
    const movies = ref<Movie[]>([]);
    const movieSelect = ref<Movie>();

    //getter
    // mostra "data" de forma formateada
    // se guardan el la cache del navegador
    // Cuando algun dato del getter cembie
    const trendingMovies = computed<Movie[]>(() => movies.value);
    // usar como filtro para que devuelva todos lode tvshows

    // const movieSelectOne = computed<Movie>(() => movieSelect.value);

    const tvShows = computed<Movie[]>(() => {
        return movies.value.filter((m) => m.media_type === 'movie');
    });

    const movieTitle = computed<string>(() => {
        return movieSelect.value?.title
            ? movieSelect.value.title
            : movieSelect.value?.name
              ? movieSelect.value.name
              : '';
    });

    //actions
    // disparadores de eventos
    const getMovie = async (type: string, id: number): Promise<void> => {
        movieSelect.value = await Movies.getSingleMovie(type, id);
    };

    const getMovies = async (): Promise<void> => {
        movies.value = await Movies.getTrendingMovies();
    };

    const setMovies = (newMovies: Movie[]): void => {
        movies.value = newMovies;
    };

    const setMovieSelect = (newMovie: Movie): void => {
        movieSelect.value = newMovie;
    };

    return {
        movies,
        movieSelect,
        trendingMovies,
        tvShows,
        movieTitle,
        getMovie,
        getMovies,
        setMovies,
        setMovieSelect
    };
});
