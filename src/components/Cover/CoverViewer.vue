<template>
    <v-card
            max-width="444"
            min-width="444"
            class="mx-auto"
            flat
            style="padding: 1em"
    >
        <v-carousel
                :continuous="true"
                :show-arrows="true"
                hide-delimiter-background
                cycle
                height="300"
        >
            <v-carousel-item
                    v-for="(image, i) in images"
                    :key="i"
                    :src="image"
            ></v-carousel-item>
        </v-carousel>
    </v-card>
</template>

<script>
    import {ArticleClient} from "../../client/ArticleClient";
    export default {
        name: "CoverViewer",
        props:{
            id: String
        },
        data:()=>({
            picB64:null,
            images:[]
        }),
        beforeMount() {
            this.loadPic(0)
        },
        methods:{
            loadPic:async function (index) {
                try {
                    this.images.push('data:image/jpeg;base64,' + await ArticleClient.getCover(this.id, index))
                    await this.loadPic(index + 1)
                }catch (e) {
                    console.log(this.images)
                }
            },
            async newCover(){
                console.log(await ArticleClient.postCover(this.id,this.picB64))
            }
        }
    }
</script>

<style scoped>

</style>
