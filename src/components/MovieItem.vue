<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

import { useMovieStore } from '@/stores/movie';
import  type { Movie } from '@/types/Movie';
import Movies from '@/services/Movies.ts';
import MovieSlider from './MovieSlider.vue';

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

// Metodo para obtener la pelicula
const getMovie = async (id:number, type:string ) =>{
    const r  =  await Movies.getSingleMovie(type, id);
    movie.value = r;
    movieTitlte.value = r.title ? r.title : r.name;
}

onMounted(async () => {
    // // casting con TypeScript(type)
    const typeMovie: string = route.query.type as string;
    const idmovie: number = Number(route.params.id);
    
    if(movieSelect.value){
        movie.value = movieSelect.value;
        movieTitlte.value = store.movieTitle;
        
    }else {
        getMovie(idmovie, typeMovie);
        
    }
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
                <p class="votes">{{ movie?.vote_average }} Votes</p>
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
    flex-direction:column-reverse;

    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 1em;
}
p,
h2 {
    color: white;
}
h2 {
    font-size: 300%;
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
    font-size: 1.5em ;
    /* font-size: 100%; */
}


@media (min-width: 1024px) {

.container-movie-item {
    flex-direction: row;
    gap: 1em;
    margin: 2em;
}
}
</style>
