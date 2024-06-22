<script setup lang="ts">
import { computed, ref } from 'vue';
const name = ref<string>('erick');

const newname = computed<string>(() => {
    return name.value + ' cruz';
});

const handleClick = (event: Event) => {
    // me imprime el elemnto
    console.log(event.target);
    console.log((event.target as HTMLButtonElement).className);
};
</script>

<template>
    <div>
        <h2>Componente Movie</h2>
        <p>
            movie:
            {{ name }}
        </p>
        <p>
            nnuevo nombre
            {{ newname }}
        </p>
        <button class="mi-btn-cl" @click="handleClick"></button>
    </div>
</template>
