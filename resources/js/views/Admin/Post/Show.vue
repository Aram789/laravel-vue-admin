<template>
    <loader v-if="loader"></loader>
    <p class="text-danger" v-if="errors">{{ errors.title[0] }}</p>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Created</th>
            <th scope="col"></th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">{{ response.id }}</th>
            <td>{{ response.title }}</td>
            <td>{{ response.desc }}</td>
            <td>{{ response.created_at }}</td>
            <td role="button" @click="remove(response.id)">remove</td>
            <td role="button" @click="update(response.id)">edit</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
import axios from "axios";
import router from "../../../router.js";
import Loader from "../../../components/Loader.vue";

export default {
    data: () => ({
        response: [],
        errors: false,
        loader: false
    }),
    mounted() {
        this.loader = true;
        axios.get('/api/post/' + this.$route.params.id)
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
        remove(id) {
            this.loader = true;
            axios.delete('/api/post/' + id)
                .then(res => {
                    if (res.data.status === 'deleted') {
                        this.loader = false;
                        router.push('/admin/post/index')
                    }
                })
                .catch(error => {
                    this.errors = error.response.data.errors;
                });
        },
        update(id) {
            router.push('/admin/post/update/' + id)
        }

    }
}
</script>
