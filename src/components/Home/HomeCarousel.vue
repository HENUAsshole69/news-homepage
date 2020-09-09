<template>
    <v-carousel
            cycle
            height="400"
            style="cursor: pointer"
            hide-delimiter-background
    >
        <v-carousel-item
                v-for="(image, i) in images"
                :key="i"
                @click="()=>click(image.id)"
        >
            <v-img height="100%" :src="image.img"
                   class="white--text align-end"
                   contain
                   max-height="400"
                   aspect-ratio="1.7778"
                   @click="()=>click(image.id)"
                   gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                <v-card-title>{{image.title}}</v-card-title>
            </v-img>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
    import AxiosInstance from "@/client/AxiosInstance";
    import {ArticleClient} from "@/client/ArticleClient";

    export default {
        name: "HomeCarousel",
        data:()=>({
            images:[]
        }),
        async mounted() {
            const list = (await AxiosInstance.get('/headline',{

            })).data
            for(const item of list){
                try {
                    this.images.push({img: 'data:image/jpeg;base64,' + await ArticleClient.getCover(item.id, 0),title: item.title,id: item.id})
                    // eslint-disable-next-line no-empty
                }catch (e){

                }
            }
            console.log(this.images)
        },
        methods:{
            click(id){
                this.$router.push("/view/"+id)
            }
        }
    }
</script>

<style scoped>
</style>
