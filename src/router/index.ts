import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MovieItem from '@/components/MovieItem.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/movies',
            name: 'movies',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/MovieView.vue')
        },
        {
            path: '/movie/:id',
            name: 'movieID',
            component: () => import('@/components/MovieItem.vue')
        },
        {
            path: '/person/:id',
            name: 'personID',
            component: () => import('@/components/PersonItem.vue')
        }
    ]
});

export default router;
