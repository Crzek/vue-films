<script setup lang="ts">
import { ref } from 'vue';
// import MovieComponent from '@/components/MovieComponent.vue';
import Movies from '@/services/Movies.ts';
import type { Movie } from '@/types/Movie';

import { onMounted } from 'vue';
// import MovieListItem from './MovieListItem.vue';
import MovieSlider from '@/components/MovieSlider.vue';

// ref que guardara un array que contedra, Movie
const allMovies = ref<Movie[]>([]);

// obtener resultados desde API
onMounted(async () => {
    // objeto que guardara movies
    const { results } = await Movies.getTrendingMovies();
    allMovies.value = results;
    console.log('r.data', results);
});
</script>

<template>
    <div class="movies-all">
        <!-- Contenido de IMagenes en Vertical -->
        <MovieSlider :movies="allMovies" :type="'poster'" :title="'Trending'" />
    </div>
</template>

<style scoped></style>
