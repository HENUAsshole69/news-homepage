<template>
    <v-container fluid :style="{ backgroundImage: 'url(' + require('../../public/img/wjc_bg_02.jpg') + ')','background-size':'cover' }">
        <v-row>
            <v-col class="">
                <v-container>
                    <v-row>
                        <v-col class="d-flex justify-center align-center" style="padding-right:0;margin-right: 0">
                            <v-img   max-width="227" max-height="175"  :src="require('../../public/img/wz2.png')" />
                        </v-col>
                        <v-col  class="d-flex justify-center"  style="padding-left:0;margin-right: 0">
                            <item-tray :repo="repo"/>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    import TypeAndPubRepo from "@/client/TypeAndPubRepo";
    import ItemTray from "@/components/ExhibitionSection/ItemTray";
    export default {
        name: "Browse",
        components: {ItemTray},
        data:()=>({
            repo: { fetch: TypeAndPubRepo("EXHIBITION",true)}
        }),
        methods:{
        }
    }
</script>

<style scoped>

</style>
