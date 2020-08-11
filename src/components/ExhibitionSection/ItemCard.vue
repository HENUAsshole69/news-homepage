<template>
    <v-card :rounded="'0'" height="100px" width="120px" style="overflow: hidden"  @click="click">
        <v-img
                :src="img"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                max-width="120px"
                max-height="100px"
        >
            <v-card-title>{{title}}</v-card-title>
        </v-img>
    </v-card>
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
                this.$router.push("/view/"+this.id)
            }
        }
    }
</script>

<style scoped>

</style>
