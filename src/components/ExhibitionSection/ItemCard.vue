<template>
    <v-sheet elevation="10" style="overflow: hidden;cursor: pointer;"  @click="click">
        <v-img
                :src="img"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                min-width="180px"
                aspect-ratio="1.7778"
        >
            <v-card-title>{{title}}</v-card-title>
        </v-img>
    </v-sheet>
</template>

<script>
    import {ArticleClient} from "@/client/ArticleClient";

    export default {
        name: "ItemCard",
        props:{
            id: Number,
            title: String,
            img: null
        },
        async mounted() {
            this.img = 'data:image/jpeg;base64,' + await ArticleClient.getCover(this.id, 0)
        },
        methods:{
            click(){
                this.$router.push("/category/detail/"+this.id)
            }
        }
    }
</script>

<style scoped>

</style>
