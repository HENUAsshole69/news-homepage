<template>
    <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            style="cursor: pointer"
    >
        <v-carousel-item
                v-for="(image, i) in images"
                :key="i"
        >
            <honor-wall-image :id="image.id"/>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
    import HonorWallImage from "./HonorWallImage";
    import {WallImageClient} from "../../../client/WallImageClient";

    export default {
        name: "HonorWallCarousel",
        components: {HonorWallImage},
        data:()=>({
            images:[]
        }),
        async mounted() {
            this.images= await WallImageClient.getImageDtoList()
        },
        methods:{
        }
    }
</script>

<style scoped>
</style>
