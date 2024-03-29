/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';

import {createApp} from 'vue';
import router from "./router.js";

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});


import V_Header from "./components/V_Header.vue";
import Admin_Header from "./components/Admin_Header.vue";
import V_Footer from "./components/V_Footer.vue";
import Aside from "./components/Aside.vue";
import Index from "./views/Index.vue";
import Loader from "./components/Loader.vue";

app.component('v_header', V_Header);
app.component('admin_header', Admin_Header);
app.component('v_footer', V_Footer);
app.component('v_aside', Aside);
app.component('index', Index);
app.component('loader', Loader);


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */
app.use(router).mount('#app');
