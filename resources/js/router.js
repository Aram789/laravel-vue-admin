import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Index.vue";
import Posts from "./views/Posts.vue";
import PostCreate from "./views/Admin/Post/Create.vue";
import ProductCreate from "./views/Admin/Product/Create.vue";
import ProductIndex from "./views/Admin/Product/Index.vue";
import PostIndex from "./views/Admin/Post/Index.vue";
import PostShow from "./views/Admin/Post/Show.vue";
import PostUpdate from "./views/Admin/Post/Update.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/post',
            name: 'post',
            component: Posts
        },
        {
            path: '/admin',
            name: 'admin',
            children: [
                {
                    path: '/admin/post/create',
                    name: 'create',
                    component: PostCreate
                },
                {
                    path: '/admin/post/index',
                    name: 'index',
                    component: PostIndex
                },
                {
                    path: '/admin/post/show/:id',
                    name: 'show',
                    component: PostShow
                },
                {
                    path: '/admin/post/update/:id',
                    name: 'update',
                    component: PostUpdate
                },
                {
                    path: '/admin/product/create',
                    name: 'create-product',
                    component: ProductCreate
                },
                {
                    path: '/admin/product/index',
                    name: 'index-product',
                    component: ProductIndex
                },
            ]
        },


    ]
})


export default router;
