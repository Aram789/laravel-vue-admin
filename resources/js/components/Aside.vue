<template>
    <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4" :class="min ? 'min' : ''">
            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar Menu -->
                <div class="bg-info p-3">
                    <strong data-bs-toggle="collapse" data-bs-target="#post" aria-expanded="false"
                            aria-controls="collapseExample" role="button">Post</strong>
                    <div class="collapse" id="post" role="button">
                        <div>
                            <router-link class="text-white" to="/admin/post/index">Show All Posts</router-link>
                        </div>
                        <div>
                            <router-link class="text-white" to="/admin/post/create">Create</router-link>
                        </div>
                    </div>
                </div>
                <div class="mini_sidebar" role="button" @click="min = !min">
                    <i class="fas fa-expand-arrows-alt"></i>
                </div>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>
</template>

<script>
export default {
    data: () => ({
        min: false
    }),
}
</script>
