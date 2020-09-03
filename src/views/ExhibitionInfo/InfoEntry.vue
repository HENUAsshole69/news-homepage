<template>
    <v-list-item @click="$router.push('/exhibition/info/detail/'+id)" style="cursor: pointer">
        <v-list-item-avatar rounded="0" :height="100" :width="100" color="grey"><v-img :src="images[0]" aspect-ratio="1.7778" :min-width="200"/></v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title class="headline">{{obj!==null?obj.title:''}}</v-list-item-title>
            <v-list-item-subtitle>{{obj!==null?new Date(obj.time).toLocaleDateString():''}}</v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
    import {ArticleClient} from "../../client/ArticleClient";
    export default {
        name: "InfoEntry",
        props:{
            id: String
        },
        data:()=>({
            picB64:null,
            images:[],
            obj:null
        }),
        async beforeMount() {
            await this.loadPic(0)
            this.obj = await ArticleClient.getArticleDto(this.id)
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
