<template>
    <v-img max-width="200" aspect-ratio="1.7778" :src="image">
    </v-img>
</template>

<script>
    import {WallImageClient} from "../../../client/WallImageClient";

    export default {
        name: "WallImage",
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
