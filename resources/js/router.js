import { createRouter, createWebHistory } from "vue-router";


import Post from "./views/Post.vue";
import About from "./views/About.vue";
import Index from "./views/Index.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Index
        },
        {
            path: '/post',
            name: 'post',
            component: Post
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})


export default router;
