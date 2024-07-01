<script setup lang="ts">
// Importamos las referencias reactivas de Vue y el RouterLink para la navegación.
import { computed, reactive, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import type { RouteNav } from '@/types/nav/NavBarLink';

// Definimos las propiedades que el componente recibe, en este caso, un array de rutas.
const props = defineProps<{
    routes: RouteNav[];
    isFull: boolean;
}>();


// Creamos una referencia reactiva para controlar si el menú está abierto o cerrado.
const isMenuOpen = ref(true);

// Definimos una función que alterna el estado del menú.
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const styleNav = reactive({
    'nav-mobile': true,
    'menu-open': isMenuOpen,
    'full': props.isFull
})
</script>

<template>
    <!-- La clase dinámica se aplica al elemento nav para controlar la visibilidad del menú. -->
    <!-- <nav :class="['nav-mobile', { 'menu-open': isMenuOpen, 'full':isFull}, ]"> -->
    <nav :class="styleNav">
        <div class="container-nav">
            <!-- Iteramos sobre las rutas y creamos enlaces de navegación para cada una. -->
            <RouterLink
                v-for="(route, index) in routes"
                :key="`routes-${index}`"
                :to="route.to"
                class="router-link-mobile"
            >
                {{ route.title }}
            </RouterLink>
            
            <!-- Contenedor de las tres líneas que actúan como botón para abrir/cerrar el menú. -->
            <div class="container-line" @click="toggleMenu">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
    </nav>
    <nav class="permanent-nav-mobile">
        <div class="container-line-2" @click="toggleMenu">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="logo">
            <img src="@/assets/logo.svg" alt="" srcset="">
        </div>
        <!-- Contenedor de las tres líneas que actúan como botón para abrir/cerrar el menú. -->
    </nav>
</template>

<style scoped>
.full {
    width: 100% !important;
    /* width: auto !important; */
    /* border: 1px solid red; */

}
/* Estilo para el nav móvil */
.nav-mobile {
    font-size: 1.5em; /* Tamaño de fuente del menú */
    height: 100%; /* Altura del menú */
    width: 70%; /* Ancho del menú */
    background-color: red; /* Color de fondo del menú */
    /* position: fixed; Posición fija para que se superponga al contenido */
    position: fixed;
    /* position: sticky; */
    top: 0; /* Posición en la parte superior de la pantalla */
    left: 0; /* Alineado al borde izquierdo de la pantalla */
    transform: translateX(-100%); /* Inicialmente, el menú está fuera de la vista, a la izquierda */
    transition: transform 0.3s ease-in-out; /* Transición suave para el desplazamiento */
    z-index: 10;
}

/* Clase adicional que se aplica cuando el menú está abierto */
.nav-mobile.menu-open {
    transform: translateX(0); /* Trae el menú a la vista */
}

/* Estilos para el contenedor del menú */
.container-nav {
    display: flex; /* Flexbox para el layout */
    flex-direction: column; /* Los elementos se apilan en columna */
    justify-content: center; /* Alineación centrada verticalmente */
    align-items: center; /* Alineación centrada horizontalmente */
    gap: 1rem; /* Espacio entre los elementos */
    width: 100%; /* Ancho completo del contenedor */
    height: 100%;
    background-color: rebeccapurple; /* Color de fondo del contenedor */
}

/* Estilos para el contenedor del botón de líneas */
.container-line {
    display: flex; /* Flexbox para el layout */
    flex-direction: column; /* Las líneas se apilan en columna */
    justify-content: center; /* Alineación centrada verticalmente */
    align-items: center; /* Alineación centrada horizontalmente */
    gap: 5px; /* Espacio entre las líneas */
    height: 30px; /* Altura del contenedor */
    width: 30px; /* Ancho del contenedor */
    position: absolute; /* Posición absoluta para colocar el botón en la esquina */
    top: 5px; /* Alineado 5px desde la parte superior */
    right: 5px; /* Alineado 5px desde el borde derecho */
    cursor: pointer; /* Cursor de mano para indicar que es clicable */
}

/* Estilos para cada línea del botón */
.line {
    height: 3px; /* Altura de las líneas */
    width: 100%; /* Ancho completo del contenedor */
    background-color: rgb(255, 255, 255); /* Color blanco para las líneas */
}


/* Estilos para el logo */

.container-line-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    height: 30px;
    width: 30px;
    position: absolute;
    top: 5px;
    left: 0;
    margin: 0 5px ;
}

nav.permanent-nav-mobile {
    /* display: none; */
    display: flex;
    flex-direction: row;
    background-color: rgb(37, 46, 31);
}

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    width: 100%;
    height: 100%;

}

.logo img {
    height: 30px;
}
</style>
