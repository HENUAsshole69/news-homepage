<template>
    <v-btn class="ma-2" :loading="loading" :disabled="published || done" @click="publish" tile outlined color="success">
        <v-icon left>mdi-publish</v-icon> {{published || done?'已发布':'发布'}}
    </v-btn>
</template>

<script>
    import {ArticleClient} from "../../../client/ArticleClient";

    export default {
        name: "PublishBtn",
        props:{
            id: Number,
            published: Boolean
        },
        data:()=>({
            loading:false,
            done:false
        }),
        methods:{
            async publish(){
                this.loading = true
                await ArticleClient.publish(this.id)
                this.loading = false
                this.done = true
                this.$emit('published')
            }
        }
    }
</script>

<style scoped>

</style>
