<template>
    <loader v-if="loader"></loader>
    <form>
        <div class="mb-3">
            <p class="text-danger" v-if="errors">{{ errors.title[0] }}</p>
            <label for="title" class="form-label">Title</label>
            <input type="text" v-model="form.title" class="form-control" name="title" id="title"
                   aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <p class="text-danger" v-if="errors">{{ errors.desc[0] }}</p>
            <label for="desc" class="form-label">Description</label>
            <input type="text" v-model="form.desc" name="desc" class="form-control" id="desc">
        </div>
        <button type="button" @click="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
import axios from "axios";
import router from "../../../router.js";
import Loader from "../../../components/Loader.vue";

export default {
    components: {Loader},
    data: () => ({
        form: {
            'title': '',
            'desc': ''
        },
        errors: false,
        loader: false
    }),
    mounted() {
        this.loader = true;
        axios.get('/api/post/' + this.$route.params.id)
            .then(res => {
                if (res.data) {
                    this.loader = false;
                    this.form = res.data
                }
            })
            .catch(error => {
                this.errors = error.response.data.errors;
            });
    },
    methods: {
        submit() {
            this.loader = true;
            axios.patch('/api/post/' + this.$route.params.id, this.form, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    if (res.data) {
                        this.loader = false;
                        router.push('/admin/post/show/' + this.$route.params.id)
                    }
                })
                .catch(error => {
                    this.errors = error.response.data.errors;
                });
        }
    }
}
</script>
