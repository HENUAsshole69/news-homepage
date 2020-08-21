<template>
    <div>
        <v-system-bar lights-out></v-system-bar>
        <v-carousel
                :continuous="false"
                hide-delimiter-background
                :key="key"
        >
            <v-carousel-item
                    v-for="(image, i) in images"
                    :key="i"
                    :src="image"
            ></v-carousel-item>
        </v-carousel>
        <v-list two-line>
            <v-list-item>
                <v-form v-model="valid">
                    <pic-input @change="picB64 = $event"/>
                </v-form>
            </v-list-item>
            <v-list-item>
                <v-btn :disabled="!valid" @click="newCover">
                    上传
                </v-btn>
                <v-btn :disabled="images.length === 0" @click="clearCover">
                    清空
                </v-btn>
            </v-list-item>
        </v-list>
    </div>
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
            images:[],key:0,valid:false
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
                this.images.length = 0
                await this.loadPic(0)
            },
            async clearCover(){
                await ArticleClient.delCover(this.id)
                this.images.length = 0
                this.key++
            }
        }
    }
</script>

<style scoped>

</style>
