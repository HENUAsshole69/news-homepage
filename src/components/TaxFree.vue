<template>
    <v-container fluid :style="{ backgroundImage: 'url(' + require('../../public/img/yjc_list_bg.jpg') + ')','background-size':'cover' }">
        <v-row>
            <v-col class="">
        <v-container>
            <v-row>
                <v-col class="d-flex justify-center" style="padding-right:0;margin-right: 0">
                    <img :src="require('../../public/img/wz1.png')">
                </v-col>
                <v-col  class="d-flex justify-center"  style="padding-left:0;margin-right: 0">
                    <tax-free-viewer/>
                </v-col>
            </v-row>
        </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import TaxFreeViewer from "@/components/TaxFreeSection/TaxFreeViewer";
    export default {
        name: "TaxFree",
        components: {TaxFreeViewer}
    }
</script>

<style scoped>

</style>
