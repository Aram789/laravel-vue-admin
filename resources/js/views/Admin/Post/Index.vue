<template>
    <loader v-if="loader"></loader>
    <p class="text-danger" v-if="errors">{{ errors.title[0] }}</p>
    <table class="table" v-if="response.length">
        <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Created</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(data, idx) in response" :key="idx">
            <th scope="row">{{ idx + 1 }}</th>
            <td>{{ data.title }}</td>
            <td>{{ data.desc }}</td>
            <td>{{ data.created_at }}</td>
            <td role="button" @click="postShow(data.id)">view</td>
            <td role="button" @click="remove(data.id, $event)">remove</td>
            <td role="button" @click.self="update(data.id)">edit</td>
        </tr>
        </tbody>
    </table>
    <div v-else>
        <strong class="fs-1">Post Empty</strong>
        <div>
            <router-link class="text-primary" to="/post/create">Create</router-link>
        </div>
    </div>

</template>

<script>
import axios from "axios";
import router from "../../../router.js";

export default {
    data: () => ({
        response: [],
        errors: false,
        loader: false,
        desks: []
    }),
    mounted() {
        this.loader = true;
        axios.get('/api/post')
            .then(res => {
                if (res.data) {
                    this.loader = false;
                    this.response = res.data
                }
            })
            .catch(error => {
                this.errors = error.response.data.errors;
            });
    },
    methods: {
        postShow(id) {
            router.push('/post/show/' + id)
        },
        remove(id, e) {
            this.loader = true;
            axios.delete('/api/post/' + id)
                .then(res => {
                    if (res.data.status === 'deleted') {
                        const box = e.target.closest('tr');
                        box.remove();
                        this.loader = false;
                    }
                })
                .catch(error => {
                    this.errors = error.response.data.errors;
                });
        },
        update(id) {
            router.push('/post/update/' + id)
        }
    }
}
</script>
