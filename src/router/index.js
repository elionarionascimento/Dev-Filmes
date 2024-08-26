import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import DetalhesFilmes from '@/components/DetalhesFilmes.vue';
import DetalhesSeries from "@/components/DetalhesSeries.vue"
import FilmesCatalogo from '@/components/FilmesCatalogo.vue';
import SerieCatalogo from '@/components/SerieCatalogo.vue';

const routes = [
  
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },

    {
        path: '/movie/:id',
        name: 'DetalhesFilmes',
        component: DetalhesFilmes
    },

    { 
        path: '/filmes',
        name: 'FilmesCatalogo',
        component: FilmesCatalogo
    },

    { 
        path: '/series',
        name: 'SerieCatalogo',
        component: SerieCatalogo
    },

    {
        path: '/series/:id',
        name: 'DetalhesSeries',
        component: DetalhesSeries
    },
    
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router