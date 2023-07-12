import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/views/HomeView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: { title: "BProf - Home" }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const pageTitle = to.meta.title;
    if (pageTitle) {
        document.title = pageTitle;
    } else {
        document.title = 'BProf';
    }
    next();
});

export default router;