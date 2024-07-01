<script setup lang="ts">
import { type Ref, ref, onMounted } from 'vue';
// import MovieComponent from '@/components/MovieComponent.vue';
import Movies from '@/services/Movies.ts';
import type { Movie } from '@/types/Movie';

// import MovieListItem from './MovieListItem.vue';
import MovieSlider from '@/components/MovieSlider.vue';

// pinia Context
import { usePersonStore } from '@/stores/Person';

const personStore = usePersonStore();

// ref que guardara un array que contedra, Movie
const allMovies = ref<Movie[]>([]);
// TV shows
const tvShows = ref<Movie[]>([]);

// wide
const person = ref<Movie[]>([]);

// tipado para Ref movies[]
const getMovies = async (
    typeScreen: string, //person/ movie/tv
    dataSave: Ref<Movie[]>,
    timeRes: string = 'week'
): Promise<any[]> => {
    // objeto que guardara movies
    // let { results } = await Movies.getTrendingMovies();
    const { results } = await Movies.getTrendingMovies(typeScreen, timeRes);
    console.log('r.data', results);
    dataSave.value = results;
    return results;
};

// obtener resultados desde API
onMounted(async () => {
    // // tv shows
    getMovies('movie', allMovies);
    getMovies('tv', tvShows);
    personStore.setPersons(await getMovies('person', person));
    // // persona
    // results = await Movies.getTrendingMovies('person');
    // person.value = results;
});
</script>

<template>
    <div class="movies-all">
        <!-- Contenido de IMagenes en Vertical(movies) -->
        <MovieSlider :movies="tvShows" :type="'wide'" :title="'TvShows'" :view="'auto'"/>
        <MovieSlider :movies="allMovies" :type="'poster'" :title="'Trending'" :view="2" />
        <MovieSlider :movies="person" :type="'person'" :title="'Persons'" :view="2"/>
    </div>
</template>

<style scoped>
.movies-all {
    /* width: 100%; */
}
body {
    display: block;
}
</style>
