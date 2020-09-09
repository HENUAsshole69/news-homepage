<template>
    <v-img height="100%" :src="image"
           class="white--text align-end"
           contain
           max-height="400"
           aspect-ratio="1.7778">
    </v-img>
</template>

<script>
    import {WallImageClient} from "../../../client/WallImageClient";

    export default {
        name: "HonorWallImage",
        props:{
            id: String
        },
        data:()=>({
            image:''
        }),
        async mounted() {
            this.image = ('data:image/jpeg;base64,' + await WallImageClient.getImage(this.id))
        }
    }
</script>

<style scoped>

</style>
