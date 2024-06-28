<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { RouteNav } from '@/types/nav/NavBarLink';

const props = defineProps<{
    routes: RouteNav[];
}>();
</script>
<template>
    <nav class="nav-Desktop">
        <RouterLink
            v-for="(route, index) in routes"
            :key="`routes-${index}`"
            :to="route.to"
            class="router-link-desk"
        >
            {{ route.title }}
        </RouterLink>
    </nav>
</template>

<style scoped>
.nav-Desktop {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    font-size: 1em;
}
</style>
