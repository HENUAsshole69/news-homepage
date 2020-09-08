<template>
    <v-btn class="ma-2" :loading="loading" @click="publish" tile outlined color="success">
        <v-icon left>mdi-pencil</v-icon> 编辑
    </v-btn>
</template>

<script>

    export default {
        name: "EditStatic Btn",
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
                await this.$router.push('/edit/static/'+this.id)
                this.loading = false
            }
        }
    }
</script>

<style scoped>

</style>
