import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/views/HomeView.vue';
import TeacherSection from '../components/views/TeacherSection.vue';
import SingleTeacher from '../components/views/SingleTeacher.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: { title: "BProf" }
    },
    {
        path: '/teachers',
        name: 'Teacher',
        component: TeacherSection,
        meta: { title: "BProf - Professori" }
    },
    {
        path: '/teachers/:id',
        name: 'single-teacher',
        component: SingleTeacher,
        meta: { title: "BProf - Professore" }
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