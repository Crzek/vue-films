<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

import { useMovieStore } from '@/stores/movie';
import type { Movie } from '@/types/Movie';
import Movies from '@/services/Movies.ts';

const router = useRouter(); // para la Navegacion
const route = useRoute(); //  para obtener param del path
const store = useMovieStore();
// desestruccturacion para obtener solo 1 data
// para evitar => store.movieSelect
const { movieSelect } = storeToRefs(store);
// usamos contexto apra recuperar tittle

// varibles ref para obtener en onMount, loas valres de contexto
const movieTitlte = ref<string>();
const movie = ref<Movie>();

onMounted(async () => {
    console.log(route.params);
    console.log(route.query);
    console.log(movieSelect);

    // // casting con TypeScript(type)
    const typeMovie: string = route.query.type as string;
    const idmovie: number = Number(route.params.id);

    // store set movie
    await store.getMovie(typeMovie, idmovie);
    movie.value = store.movieSelect;
    movieTitlte.value = store.movieTitle;
});
</script>

<template>
    <div class="container-movie-item">
        <div class="text">
            <h2>{{ movieTitlte }}</h2>
            <div class="values">
                <p class="votes">{{ movie?.vote_average }}</p>
            </div>
            <div class="resum">
                <p class="title">Resum</p>
                <p class="overview">{{ movie?.overview }}</p>
            </div>
        </div>
        <div class="image">
            <img
                :src="`${Movies.imageURL}/${movie?.poster_path}`"
                :alt="movieTitlte"
            />
        </div>
    </div>
</template>

<style scoped>
.container-movie-item {
    display: flex;

    justify-content: center;
    align-items: center;
    gap: 10px;
}
p,
h2 {
    color: white;
}
h2 {
    font-size: 500%;
}

.votes {
    font-size: large;
    color: wheat;
}

.image img {
    max-height: 100vh;
}

.resum {
    margin-top: 1em;
}

.resum .title {
    font-size: 200%;
}
</style>
