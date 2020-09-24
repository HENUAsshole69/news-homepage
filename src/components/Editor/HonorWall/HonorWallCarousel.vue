<template>
    <slider v-if="display" v-bind="settings"/>
</template>

<script>
    import slider from 'vue-image-scroll';
    import {WallImageClient} from "../../../client/WallImageClient";

    export default {
        name: "HonorWallCarousel",
        components: {slider},
        data:()=>({
            settings: {
                imgStyle: {
                    objectFit: 'contain',
                    height:'500',
                    width:'400'
                },
                image:[],
                interval: 1000,
                autoRoll: true
            },
            display:false
        }),
        async mounted() {
            this.settings.image=
            await Promise.all((await WallImageClient.getImageDtoList())
                .map(async function (x) {
                    return ('data:image/jpeg;base64,' + await WallImageClient.getImage(x.id))
                }))
            this.display = true
            console.log(this.settings.image)
        },
        methods:{
        }
    }
</script>

<style scoped>
</style>
