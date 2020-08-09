<template>
    <v-btn class="ma-2" :loading="loading" @click="publish" tile outlined color="success">
        <v-icon left>mdi-trash-can-outline</v-icon> 删除
    </v-btn>
</template>

<script>
    import {ArticleClient} from "../../../client/ArticleClient";

    export default {
        name: "DelBtn",
        props:{
            id: Number,
            published: Boolean
        },
        data:()=>({
            loading:false
        }),
        methods:{
            async publish(){
                this.loading = true
                await ArticleClient.delete(this.id)
                this.loading = false
                this.$emit('deleted')
            }
        }
    }
</script>

<style scoped>

</style>
