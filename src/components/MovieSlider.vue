<script setup lang="ts">
import { defineProps } from 'vue';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
// Import Swiper Vue.js components
import { SwiperSlide, Swiper } from 'swiper/vue';

// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import type { Movie } from '@/types/Movie';
import MovieListItem from '@/components/MovieListItem.vue';

const props = defineProps<{
    movies: Movie[]; //array de typo Movie, contiene todos los Movies
    title: string; // title from Slider
    type: string; // tipe Slider, movie, tv or people
}>();

const modules = [Navigation, Pagination, Scrollbar];

// methods
const onSwiper = (swiper: any) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};
</script>

<template>
    <div class="movie-list-container">
        <!-- El contenedor Slider -->
        <h2>{{ title }}</h2>
        <Swiper
            :slides-per-view="'auto'"
            :space-between="20"
            navigation
            :scrollbar="{
                draggable: true
            }"
            :modules="modules"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <!-- Elementor que queremos mostrar -->
            <SwiperSlide
                v-for="movie in movies"
                :key="movie.id"
                class="swiperSlider"
            >
                <!-- aqui se deven de poner varios fotos para Mostrar -->
                <MovieListItem :movie="movie" :type="type" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style scoped>
.swiperSlider {
    width: auto !important;
}
/* .movie-list-container {
    border: 1px solid red;
} */
</style>
