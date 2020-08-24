<template>
    <v-container class="zoom" fluid style="margin: 0;padding: 0;backface-visibility: hidden;cursor: pointer;">
        <v-row no-gutters style="margin: 0;padding: 0;">
            <v-sheet  elevation="5" style="overflow: hidden;"  @click="click">
                <v-img
                        :src="img"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        min-width="260px"
                        aspect-ratio="1.7778"
                >
                </v-img>
            </v-sheet>
        </v-row>
        <v-row  no-gutters style="margin: 0;padding: 0;">
            <v-col class="text-center">
                {{title}}
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {ArticleClient} from "@/client/ArticleClient";

    export default {
        name: "CategoryItemCard",
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
    .zoom {
        transition: transform .2s; /* Animation */
        margin: 0 auto;
    }
    .zoom:hover {
        transform: scale(1.1);
        color: red/* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    }
</style>
