<template>
    <v-container fluid :style="{ backgroundImage: 'url(' + require('../../public/img/gj_list_bg.jpg') + ')','background-size':'cover','padding-top':'5em','padding-bottom':'5em' }">
        <v-row class="d-flex justify-center">
            <v-col lg="8">
                <v-container style="padding: 0;margin: 0">
                    <v-row  style="padding: 0;margin: 0" class="flex-nowrap">
                        <v-col class="d-flex justify-center align-center" style="padding-right:0;margin-right: 0">
                            <v-img   max-width="227" max-height="175"  :src="require('../../public/img/wz3.png')" />
                        </v-col>
                        <v-col  class="d-flex justify-center"  style="padding-left:0;margin-right: 0;margin-top: 0;padding-top: 0">
                            <v-list outlined  style="padding: 0;margin: 0" elevation="0">
                                    <v-list-item-content  style="padding: 0;margin: 0">
                                        <v-row no-gutters  style="padding: 0;margin: 0">
                                            <v-col  style="padding: 0;margin: 0">
                                                <v-tabs
                                                        background-color="white"
                                                        color="white"
                                                        height="2em"
                                                        class="tab"
                                                        hide-slider
                                                        active-class="brown-tab"
                                                        v-model="tab"
                                                >
                                                    <v-tab>春秋</v-tab>
                                                    <v-tab>望塑</v-tab>
                                                    <v-tab>网拍</v-tab>
                                                </v-tabs>
                                            </v-col>
                                        </v-row>
                                    </v-list-item-content>
                                <v-list-item  style="padding: 0;margin: 0">
                                    <v-container  style="padding: 0;margin: 0" >
                                        <v-row  style="padding: 0;margin: 0" no-gutter>
                                            <v-col  style="padding: 0;margin: 0">
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
                                        <v-row style="padding: 0;margin: 0;background-color: #f4f4f4" class="d-flex justify-center" no-gutter>
                                            <button @click="$router.push('/category/'+linkParam[tab].type+'/'+linkParam[tab].subType)"><v-col class="flex-grow-0 load-more">查看更多</v-col></button>
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
        name: "Auction",
        components: {ItemTray},
        data:()=>({
            tab: 0,
            repos:[
                { fetch: SubTypeRepo("AUCTION",'SPRING_AUTUMN')},
                { fetch: SubTypeRepo("AUCTION",'WANG_SU')},
                { fetch: SubTypeRepo("AUCTION",'ONLINE_AUCTION')}
            ],
            linkParam:[
                {type:'AUCTION',subType:'SPRING_AUTUMN'},
                {type:'AUCTION',subType:'WANG_SU'},
                {type:'AUCTION',subType:'ONLINE_AUCTION'}
            ]
        }),
        methods:{
        }
    }
</script>

<style scoped>
    @import "../load-more.scss";
    .brown-tab{
        background-color: #c9a035;
    }
    .tab{
    }
</style>
