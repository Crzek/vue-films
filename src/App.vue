<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';

// NavABr responsive
import ResponsiveNavbar from '@/components/navbar/ResponsiveNavbar.vue';
</script>

<template>
    <ResponsiveNavbar />
    <RouterView />
</template>

<style></style>
