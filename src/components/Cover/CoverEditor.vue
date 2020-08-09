<template>
    <v-card
            max-width="444"
            class="mx-auto"
            height="300"
    >
        <v-system-bar lights-out></v-system-bar>
        <v-carousel
                :continuous="false"
                :show-arrows="false"
                hide-delimiter-background
                delimiter-icon="mdi-minus"
                height="150"
        >
            <v-carousel-item
                    v-for="(image, i) in images"
                    :key="i"
                    :src="image"
            ></v-carousel-item>
        </v-carousel>
        <v-list two-line>
            <v-list-item>
                <pic-input @change="picB64 = $event"/>
            </v-list-item>
            <v-list-item>
                <v-btn @click="newCover">
                    上传
                </v-btn>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
    import PicInput from "./PicInput";
    import {ArticleClient} from "../../client/ArticleClient";
    export default {
        name: "CoverEditor",
        components: {PicInput},
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
