<template>
    <slider v-bind="settings"/>
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
                    borderRadius: '20px'
                },
                image:[],
                interval: 1000,
                autoRoll: true
            }
        }),
        async mounted() {
            this.settings.image=
            await Promise.all((await WallImageClient.getImageDtoList())
                .map(async function (x) {
                    return ('data:image/jpeg;base64,' + await WallImageClient.getImage(x.id))
                }))
            console.log(this.settings.image)
        },
        methods:{
        }
    }
</script>

<style scoped>
</style>
