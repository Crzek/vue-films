// import { RouterLink } from 'vue-router';
import type { Component } from 'vue';

// para multiples rutas
export type RouteNav = {
    to: string;
    title: string;
};

// para crear
export type NavBarLink = {
    to: {
        name: string;
        path: string;
        component: Component; //debe ser un componete de vue
    };
    name: string;
};
