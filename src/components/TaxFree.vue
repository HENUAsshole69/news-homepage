<template>
    <v-container fluid :style="{ backgroundImage: 'url(' + require('../../public/img/wjc_list_bg.jpg') + ')','background-size':'cover','padding-top':'5em','padding-bottom':'5em' }">
        <v-row class="d-flex justify-center">
            <v-col lg="8">
        <v-container>
            <v-row>
                <v-col class="d-flex justify-center align-center" style="padding-right:0;margin-right: 0">
                    <v-img  max-width="227" max-height="175" :src="require('../../public/img/wz1.png')" />
                </v-col>
                <v-col  class="d-flex justify-center"  style="padding-left:0;margin-right: 0">
                    <tax-free-tab :repo="repo"/>
                </v-col>
            </v-row>
        </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import ItemTray from "@/components/ExhibitionSection/ItemTray";
    import TypeAndPubRepo from "@/client/TypeAndPubRepo";
    import TaxFreeTab from "@/components/TaxFreeSection/TaxFreeTab";
    import ExhibitionTypeAndPubRepo from "../client/ExhibitionTypeAndPubRepo";
    export default {
        name: "TaxFree",
        components: {TaxFreeTab},
        data:()=>({
            repo: { fetch: ExhibitionTypeAndPubRepo("TAX_FREE",true)}
        })
    }
</script>

<style scoped>
    @import "../load-more.scss";
</style>
