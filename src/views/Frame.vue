<template>
    <div>
        <div style="position: fixed;right: 1em;bottom: 1em;z-index: 100">
            <v-card tile>
            <v-list style="padding-top: 0;padding-bottom: 0" dense>
                <v-list-item-group color="primary"  v-model="selected">
                    <template v-for="(item,i) in floatingOptions"
                              >
                        <v-list-item class="text-center"
                                     :key="i"
                                     color="pink"
                                     style="padding-left: 1em"
                                     @click="()=>goTo(item)"
                        >
                            <v-list-item-content>
                                <div><v-icon large>{{item.icon}}</v-icon>
                                    <v-list-item-title>{{item.text}}</v-list-item-title>
                                </div>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider :key="i"></v-divider>
                    </template>
                </v-list-item-group>
            </v-list>
            </v-card>
        </div>
    <v-app-bar
            app
            color="black"
            dark
            dense
    >
        <v-spacer/>
        <template v-if="$store.state.userObj === null">
            <v-btn text color="white" @click="$router.push('/login')">登录</v-btn>|
        </template>
        <template v-else>
            <v-btn text color="white" @click="$router.push('/manage')">后台</v-btn>|
        </template>
        <v-menu offset-y offset-x>
            <template v-slot:activator="{ on, attrs }">
                <v-btn text color="white" v-bind="attrs"
                       v-on="on"><v-icon left>mdi-wechat</v-icon>微信公众平台</v-btn>
            </template>
            <v-list>
                <v-list-item
                >
                    <v-img :src="require('../../public/img/art_code.jpg')"/>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
    <v-container fluid :style="{ backgroundImage: 'url(' + require('../../public/img/indexhbg.jpg') + ')','background-size':'cover' }">
        <v-container style="padding: 0;margin: 0;">
        <v-row no-gutters   class="d-flex justify-center">
            <v-col lg="8">
                <v-row no-gutters>
            <v-col class="flex-grow-0">
                <img :src="require('../../public/img/logo.png')">
            </v-col>
            <v-col class="flex-grow-1">
                <v-container fluid>
                    <v-row no-gutters>
                        <div class="my-2">
                            <v-btn @click="$router.push('/')" text color="white">首页</v-btn>
                        </div>
                        <div class="my-2">
                            <v-menu open-on-hover offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                            text color="white"
                                            v-bind="attrs"
                                            v-on="on"
                                    >
                                        保税仓储
                                    </v-btn>
                                </template>

                                <v-list>
                                    <v-list-item
                                            v-for="item in warehouseItems"
                                            :key="item.title"
                                            link
                                            @click="goTo(item)"
                                    >
                                        <v-list-item-icon>
                                            <v-icon>{{ item.icon }}</v-icon>
                                        </v-list-item-icon>

                                        <v-list-item-content>
                                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                        <div class="my-2">
                            <v-menu open-on-hover offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                            text color="white"
                                            v-bind="attrs"
                                            v-on="on"
                                    >
                                        展览展示
                                    </v-btn>
                                </template>

                                <v-list>
                                    <v-list-item
                                            v-for="item in browseItems"
                                            :key="item.title"
                                            link
                                            @click="goTo(item)"
                                    >
                                        <v-list-item-icon>
                                            <v-icon>{{ item.icon }}</v-icon>
                                        </v-list-item-icon>

                                        <v-list-item-content>
                                            <v-list-item-title >{{ item.title }}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                        <div class="my-2">
                            <v-menu open-on-hover offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                            text color="white"
                                            v-bind="attrs"
                                            v-on="on"
                                    >
                                        拍卖
                                    </v-btn>
                                </template>

                                <v-list>
                                    <v-list-item
                                            v-for="item in auctionItems"
                                            :key="item.title"
                                            link
                                            @click="goTo(item)"
                                    >
                                        <v-list-item-icon>
                                            <v-icon>{{ item.icon }}</v-icon>
                                        </v-list-item-icon>

                                        <v-list-item-content>
                                            <v-list-item-title >{{ item.title }}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                        <div class="my-2">
                            <v-menu open-on-hover offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                            text color="white"
                                            v-bind="attrs"
                                            v-on="on"
                                    >
                                        子机构职能
                                    </v-btn>
                                </template>

                                <v-list>
                                    <v-list-item
                                            v-for="item in childDeptItems"
                                            :key="item.title"
                                            link
                                            @click="goTo(item)"
                                    >
                                        <v-list-item-icon>
                                            <v-icon>{{ item.icon }}</v-icon>
                                        </v-list-item-icon>

                                        <v-list-item-content>
                                            <v-list-item-title >{{ item.title }}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </v-row>
                </v-container>
            </v-col>
                </v-row>
            </v-col>
        </v-row>
        </v-container>
        <slot></slot>
    </v-container>
        <slot name="footer"></slot>
        <Footer/>
        <LegalInfo/>
    </div>
</template>

<script>
    import Footer from "../components/Footer";
    import LegalInfo from "../components/LegalInfo";
    import {auctionItems, browseItems, childDeptItems, warehouseItems} from "./MenuItem";
    export default {
        name: "Frame",
        components: {LegalInfo, Footer},
        data:()=>({
            warehouseItems,
            browseItems,
            auctionItems,
            childDeptItems,
            floatingOptions:[
                {icon:'mdi-open-in-app',text:'我要展览',path:'/manage/editor'},
                {icon:'mdi-gavel',text:'我要拍卖',path:'/manage/editor'},
                {icon:'mdi-bank',text:'免税仓储',path:'/manage/editor'},
                {icon:'mdi-account',text:'文物登记',path:'/manage/editor'}
            ],
            selected:0
        }),
        methods:{
            goTo(item){
                if(item.id !== undefined) {
                    const id = item.id
                    if (this.$store.state.userObj === null) return this.$router.push('/view/' + id)
                    if (this.$store.state.userObj.type === 'ADMIN') {
                        this.$router.push('/edit/' + id)
                    } else {

                        this.$router.push('/view/' + id)
                    }
                }
                if(item.path !== undefined){
                    this.$router.push(item.path)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $list-dense-content-padding : 0
</style>
