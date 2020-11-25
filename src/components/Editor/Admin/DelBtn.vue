<template>
    <v-btn class="ma-2" :loading="loading" @click="publish" :disabled="deleted" tile outlined color="success">
        <v-icon left>mdi-trash-can-outline</v-icon> {{deleted?'已删除':'删除'}}
    </v-btn>
</template>

<script>
    import {ArticleClient} from "@/client/ArticleClient";

    export default {
        name: "DelBtn",
        props:{
            id: Number,
            published: Boolean
        },
        data:()=>({
            loading:false,
            deleted: false
        }),
        methods:{
            async publish(){
                this.loading = true
                await ArticleClient.delete(this.id)
                this.loading = false
                this.deleted = true
            }
        }
    }
</script>

<style scoped>

</style>
