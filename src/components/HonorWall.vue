<template>
    <v-container fluid :style="{ backgroundImage: 'url(' + require('../../public/img/yjc_bg_01.jpg') + ')','background-size':'cover' }">
        <v-row>
            <v-col class="d-flex justify-center">
                <img :src="require('../../public/img/title_ryq.png')">
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "HonorWall",
        components: {}
    }
</script>

<style scoped>

</style>
