<template>
        <v-carousel
                cycle
                hide-delimiter-background
                :show-arrows="false"
                height="200"
                :hide-delimiters="true"
        >
            <v-carousel-item
                    v-for="(image, i) in images"
                    :key="i"
                    :src="image"
                    style="width: 500px"
            ></v-carousel-item>
        </v-carousel>
</template>

<script>
    import {ArticleClient} from "../../client/ArticleClient";
    export default {
        name: "InfoCoverViewer",
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
