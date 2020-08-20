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
                            <v-list outlined elevation="0">
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-row no-gutters>
                                            <v-col class="overline mb-5"></v-col>
                                            <v-col>
                                                <v-tabs
                                                        background-color="white"
                                                        color="brown"
                                                        right
                                                        v-model="tab"
                                                >
                                                    <v-tab>书画</v-tab>
                                                    <v-tab>瓷器</v-tab>
                                                    <v-tab>杂项</v-tab>
                                                </v-tabs>
                                            </v-col>
                                        </v-row>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-container fluid>
                                        <v-row no-gutter>
                                            <v-col>
                                                <v-tabs-items v-model="tab">
                                                    <v-tab-item
                                                            v-for="i in 4"
                                                            :key="i"
                                                    >
                                                        <item-tray :key="i" :repo="repos[tab]"/>
                                                    </v-tab-item>
                                                </v-tabs-items>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-list-item>
                            </v-list>
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
    import SubTypeRepo from "@/client/SubTypeRepo";
    export default {
        name: "Browse",
        components: {ItemTray},
        data:()=>({
            tab: 0,
            repos:[
                { fetch: SubTypeRepo("EXHIBITION",'PAINTING')},
                { fetch: SubTypeRepo("EXHIBITION",'PORCELAIN')},
                { fetch: SubTypeRepo("EXHIBITION",'MISC')}
            ]
        }),
        methods:{
        }
    }
</script>

<style scoped>

</style>
