<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter, useRoute, RouterLink } from 'vue-router';
// import { storeToRefs } from 'pinia';
import { usePersonStore } from '@/stores/Person';

import type { Movie } from '@/types/Movie';
import type { Person } from '@/types/Person';
import Movies from '@/services/Movies.ts';

const router = useRouter(); // para la Navegacion
const route = useRoute(); //  para obtener param del path

const store = usePersonStore();

const personSelect = ref<Person>();
const moviesfilm = ref<Movie[]>();

onMounted(() => {
    console.log(store);
    const personId = Number(route.params.id);
    personSelect.value = store.getPersonById(personId);
    moviesfilm.value = personSelect.value?.known_for;
});
</script>

<template>
    <div class="container-movie-item">
        <div class="text">
            <h2>
                {{
                    personSelect?.name
                        ? personSelect.name
                        : personSelect?.original_name
                }}
            </h2>
            <div class="values">
                <p class="votes">{{ personSelect?.popularity }}</p>
            </div>
            <div class="resum">
                <p class="title">Films</p>
                <!-- <template v-if="moviesfilm && moviesfilm.length > 0"> -->
                <ul v-if="moviesfilm && moviesfilm.length > 0">
                    <li v-for="movie in moviesfilm" :key="`movie-${movie.id}`">
                        <RouterLink :to="`/movie/${movie.id}`">
                            {{
                                movie?.title
                                    ? movie.title
                                    : movie?.name
                                      ? movie.name
                                      : 'Noy Hay'
                            }}
                        </RouterLink>
                    </li>
                </ul>
                <!-- </template> -->
            </div>
        </div>
        <div class="image">
            <img
                :src="`${Movies.imageURL}/${personSelect?.profile_path}`"
                :alt="personSelect?.name"
            />
        </div>
    </div>
</template>
