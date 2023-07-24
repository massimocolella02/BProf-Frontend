import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/views/HomeView.vue';
import TeacherSection from '../components/views/TeacherSection.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: { title: "BProf - Home" }
    },
    {
        path: '/teachers',
        name: 'Teacher',
        component: TeacherSection,
        meta: { title: "Teachers" }
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