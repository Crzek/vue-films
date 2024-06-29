<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { RouteNav } from '@/types/nav/NavBarLink';

import MobileNav from './MobileNav.vue';
import DesktopNav from './DesktopNav.vue';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// props
const props = defineProps<{
    // routes: RouteNav[];
}>();

// const isMobile = ref(false);
const isMobile = ref(window.innerWidth <= 600);

// para saber si la ruta es la principal
const isFull = computed(() => route.path === '/');

const handleResize = () => {
    isMobile.value = window.innerWidth <= 600;
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
    // isFull. = route.path === '/';
    // console.log(path === '/');
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});

// Definir Rutas aqui
// estas son cmpartidas en los nav
const routes = ref<RouteNav[]>([
    { to: '/', title: 'Home' },
    { to: '/movies', title: 'Trending' },
    { to: '/search', title: 'Search' }
]);
</script>

<template>
    <header v-if="isMobile" :class="{ mobile: isMobile, full: isFull }">
        <MobileNav :routes="routes" :isFull="isFull"/>
    </header>
    <header v-else :class="{ desktop: !isMobile, full: isFull }">
        <DesktopNav :routes="routes" />
    </header>
</template>

<style scoped>
.full {
    height: 100vh;
}
</style>
