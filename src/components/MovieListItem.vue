<script setup lang="ts">
import type { Movie } from '@/types/Movie';
import Movies from '@/services/Movies.ts';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const url = Movies.imageURL;
console.log(url);

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
</script>
<template>
    <!-- componente para redireccionar a otra paguina -->
    <!-- como la etiqueta <a> -->
    <RouterLink
        v-if="movie"
        :to="`/movies/${movie.id}/?type=${movie.media_type}`"
        class="movie-item"
    >
        <img
            :src="`${url}/${image}`"
            :alt="movie.title ? movie.title : movie.name"
            class="image-poster"
        />
    </RouterLink>
</template>

<style scoped>
.image-poster {
    width: 200px;
}
</style>
