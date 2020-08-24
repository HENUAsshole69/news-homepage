<template>
    <v-container fluid :style="{ backgroundImage: 'url(' + require('../../public/img/yjc_list_bg.jpg') + ')','background-size':'cover','padding-top':'5em','padding-bottom':'5em' }">
        <v-row class="d-flex justify-center">
            <v-col lg="8">
                <v-container style="padding: 0;margin: 0">
                    <v-row  style="padding: 0;margin: 0">
                        <v-col class="d-flex justify-center align-center" style="padding-right:0;margin-right: 0">
                            <v-img   max-width="227" max-height="175"  :src="require('../../public/img/wz2.png')" />
                        </v-col>
                        <v-col  class="d-flex justify-center"  style="padding-left:0;margin-right: 0">
                            <v-list outlined  style="padding: 0;margin: 0" elevation="0">
                                    <v-list-item-content  style="padding: 0;margin: 0">
                                        <v-row no-gutters  style="padding: 0;margin: 0">
                                            <v-col  style="padding: 0;margin: 0">
                                                <v-tabs
                                                        background-color="white"
                                                        color="white"
                                                        hide-slider
                                                        height="2em"
                                                        class="tab"
                                                        active-class="brown-tab"
                                                        v-model="tab"
                                                >
                                                    <v-tab>书画</v-tab>
                                                    <v-tab>瓷器</v-tab>
                                                    <v-tab>杂项</v-tab>
                                                </v-tabs>
                                            </v-col>
                                        </v-row>
                                    </v-list-item-content>
                                <v-list-item style="padding: 0;margin: 0">
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
        name: "Browse",
        components: {ItemTray},
        data:()=>({
            tab: 0,
            repos:[
                { fetch: SubTypeRepo("EXHIBITION",'PAINTING')},
                { fetch: SubTypeRepo("EXHIBITION",'PORCELAIN')},
                { fetch: SubTypeRepo("EXHIBITION",'MISC')}
            ],
            linkParam:[
                {type:'EXHIBITION',subType:'PAINTING'},
                {type:'EXHIBITION',subType:'PORCELAIN'},
                {type:'EXHIBITION',subType:'MISC'}
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
