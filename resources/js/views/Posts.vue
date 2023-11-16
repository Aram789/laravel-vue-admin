<template>
    <loader v-if="loader"></loader>
    <table class="table" v-if="response.length">
        <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Created</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(data, idx) in response" :key="idx" @click="postShow(data.id)">
            <th scope="row">{{ idx + 1 }}</th>
            <td>{{ data.title }}</td>
            <td>{{ data.desc }}</td>
            <td>{{ data.created_at }}</td>
        </tr>
        </tbody>
    </table>
    <div v-else>
        <strong class="fs-1">Post Empty</strong>
    </div>
</template>

<script>
import axios from "axios";
import router from "../router.js";


export default {
    data: () => ({
        response: [],
        loader: false
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
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
