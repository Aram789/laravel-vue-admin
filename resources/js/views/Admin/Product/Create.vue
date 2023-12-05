<template>
    <form>
        <div class="mb-3">
            <p class="text-danger" v-if="errors">{{errors.name[0]}}</p>
            <label for="name"  class="form-label">Name</label>
            <input type="text" v-model="form.name" class="form-control" name="name" id="name">
        </div>
        <div class="mb-3">
            <p class="text-danger" v-if="errors">{{errors.desc[0]}}</p>
            <label for="desc" class="form-label">Description</label>
            <input type="text" v-model="form.desc" name="desc" class="form-control" id="desc">
        </div>
        <button type="button" @click="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
import axios, {Axios} from 'axios'
import router from "../../../router.js";

export default {
    data: () => ({
        form: {
            'name' : '',
            'desc' : ''
        },
        errors:false,
    }),
    methods:{
        submit(){
            console.log(this.form.name, this.form.desc)
            // axios.post('/api/post', this.form, {headers:{
            //         'Content-Type': 'application/json'
            //     }})
            //     .then(res =>{
            //         if (res.data.status){
            //             router.push('/admin/post/index')
            //         }
            //     })
            //     .catch(error =>{
            //         console.log(error.response.data.errors); debugger
            //         this.errors = error.response.data.errors;
            //     });
        }
    }
}
</script>
