<script setup lang="ts">
import type { Movie } from '@/types/Movie';
import Movies from '@/services/Movies.ts';
import { computed, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';

const url = Movies.imageURL;

// para definir la props
interface Props {
    movie: Movie;
    type: string;
}

// definir una propiedad por defecto
// las obligatorias son de la interfaz
// opcional:
// sino le paso el type, sera "wide"
const props = withDefaults(defineProps<Props>(), {
    type: 'wide'
});

// styles
const isWide = ref<boolean>(false);
const isPoster = ref<boolean>(false);

// setteo el posterpath, segun el typo
const image = computed<string | undefined>(() => {
    if (props.type === 'poster') {
        return props.movie.poster_path;
    }
    if (props.type === 'person') {
        return props.movie.profile_path;
    }
    // en caso de ser type === wide
    return props.movie.backdrop_path;
});

// para los styles
watch(
    () => props.type,
    (newType) => {
        isPoster.value = newType === 'poster' || newType === 'person';
        isWide.value = newType === 'wide';
        // console.log('isPoster', isPoster);
        // console.log('isWide', isWide);
    },
    { immediate: true } // Para que se ejecute en la inicialización
);

// :to="{
//     name: 'movieID',
//     params: { id: movie.id },
//     query: { type: movie.media_type }
// }"
// :to="{ name: 'movieID', params: { id: movie.id } }"
</script>

<template>
    <!-- componente para redireccionar a otra paguina -->
    <!-- como la etiqueta <a> -->
    <RouterLink
        v-if="
            (movie && movie.media_type === 'movie') || movie.media_type === 'tv'
        "
        :to="`/movie/${movie.id}/?type=${movie.media_type}`"
        class="movie-item"
    >
        <img
            :src="`${url}/${image}`"
            :alt="movie.title ? movie.title : movie.name"
            :class="{ 'image-wide': isWide, 'image-poster': isPoster }"
        />
    </RouterLink>
    <!--  -->
    <RouterLink
        v-if="movie && movie.media_type === 'person'"
        :to="{
            name: 'personID',
            params: { id: movie.id }
        }"
    >
        <img
            :src="`${url}/${image}`"
            :alt="movie.title ? movie.title : movie.name"
            :class="{ 'image-wide': isWide, 'image-poster': isPoster }"
        />
    </RouterLink>
</template>

<style scoped>
.image-poster {
    width: 200px;
}

.image-wide {
    width: 100%;
}
</style>
