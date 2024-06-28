<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { RouteNav } from '@/types/nav/NavBarLink';

import MobileNav from './MobileNav.vue';
import DesktopNav from './DesktopNav.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// props
const props = defineProps<{
    // routes: RouteNav[];
}>();

// const isMobile = ref(false);
const isMobile = ref(window.innerWidth <= 600);

const handleResize = () => {
    isMobile.value = window.innerWidth <= 600;
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});

// Definir Rutas aqui
// estas son cmpartidas en los nav
const routes = ref<RouteNav[]>([
    { to: '/', title: 'home' },
    { to: '/movies', title: 'Trending' },
    { to: '/search', title: 'search' }
]);
</script>

<template>
    <header v-if="isMobile" :class="{ mobile: isMobile }">
        <MobileNav :routes="routes" />
    </header>
    <header v-else :class="{ desktop: !isMobile }">
        <DesktopNav :routes="routes" />
    </header>
</template>

<style scoped>
.full {
    height: 100vh;
}
</style>
