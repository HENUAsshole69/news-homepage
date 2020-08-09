<template>
    <v-btn class="ma-2" :loading="loading" @click="publish" tile outlined color="success">
        <v-icon left>mdi-pencil</v-icon> 编辑
    </v-btn>
</template>

<script>
    import {ArticleClient} from "../../../client/ArticleClient";

    export default {
        name: "EditBtn",
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
                await this.$router.push('/edit/'+this.id)
                this.loading = false

            }
        }
    }
</script>

<style scoped>

</style>
