<template>
    <div>
        <div style="position: fixed;right: 1em;bottom: 4em;z-index: 100">
            <v-card tile>
                <v-list style="padding-top: 0;padding-bottom: 0" dense>
                    <v-list-item-group color="primary"  v-model="selected">
                        <template v-for="(item,i) in floatingOptions"
                        >
                            <v-list-item class="text-center"
                                         :key="i"
                                         color="pink"
                                         style="padding-left: 0.5em;padding-right: 0.5em"
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
            <v-card tile style="margin-top: 1em">
                <v-list style="padding-top: 0;padding-bottom: 0" dense>
                    <v-list-item class="text-center"
                                 style="padding-left: 1em"
                                 @click="$vuetify.goTo(0)"
                    >
                        <v-list-item-content>
                            <div><v-icon large>mdi-chevron-up</v-icon>
                                <v-list-item-title>返回顶部</v-list-item-title>
                            </div>
                        </v-list-item-content>
                    </v-list-item>
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
                <v-btn text color="white" @click="$router.push('/login/true')">注册</v-btn>|
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
                        <v-img max-width="133px" max-height="133px" :src="require('../../public/img/art_code.jpg')"/>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <v-container fluid class="fill-height" :style="{ backgroundImage: 'url(' + require('../../public/img/indexhbg.jpg') + ')','background-size':'cover' }">
            <v-container style="padding: 0;margin: 0;">
                <v-row no-gutters   class="d-flex justify-center flex-nowrap">
                    <v-col lg="8">
                        <v-row no-gutters class="flex-nowrap">
                            <v-col class="flex-grow-0">
                                <img  @click="$router.push('/')" style="cursor: pointer" :src="require('../../public/img/logo.png')">
                            </v-col>
                            <v-col class="flex-grow-1">
                                <v-container fluid>
                                    <v-row no-gutters class="flex-nowrap">
                                        <div class="my-2">
                                            <v-btn @click="$router.push('/')" text color="white" class="top-menu">首页</v-btn>
                                        </div>
                                        <div class="my-2">
                                            <v-menu open-on-hover offset-y>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn
                                                            text color="white"
                                                            v-bind="attrs"
                                                            v-on="on"
                                                            class="top-menu"
                                                    >
                                                        保税仓储
                                                    </v-btn>
                                                </template>

                                                <v-list color="#29395a">
                                                    <v-list-item
                                                            v-for="item in warehouseItems"
                                                            :key="item.title"
                                                            link
                                                            dense
                                                            @click="goTo(item)"
                                                    >

                                                        <v-list-item-content>
                                                            <v-list-item-title class="menu-text">{{ item.title }}</v-list-item-title>
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
                                                            class="top-menu"
                                                    >
                                                        展览展示
                                                    </v-btn>
                                                </template>

                                                <v-list color="#29395a">
                                                    <v-list-item
                                                            v-for="item in browseItems"
                                                            :key="item.title"
                                                            link
                                                            @click="goTo(item)"
                                                            dense
                                                    >
                                                        <v-list-item-content>
                                                            <v-list-item-title  class="menu-text" >{{ item.title }}</v-list-item-title>
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
                                                            class="top-menu"
                                                    >
                                                        拍卖
                                                    </v-btn>
                                                </template>

                                                <v-list color="#29395a">
                                                    <v-list-item
                                                            v-for="item in auctionItems"
                                                            :key="item.title"
                                                            link
                                                            dense
                                                            @click="goTo(item)"
                                                    >

                                                        <v-list-item-content>
                                                            <v-list-item-title  class="menu-text" >{{ item.title }}</v-list-item-title>
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
                                                            class="top-menu"
                                                    >
                                                        子机构职能
                                                    </v-btn>
                                                </template>

                                                <v-list color="#29395a">
                                                    <v-list-item
                                                            v-for="item in childDeptItems"
                                                            :key="item.title"
                                                            link
                                                            dense
                                                            @click="goTo(item)"
                                                    >

                                                        <v-list-item-content>
                                                            <v-list-item-title   class="menu-text">{{ item.title }}</v-list-item-title>
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
                                                            class="top-menu"
                                                    >
                                                        信息公开
                                                    </v-btn>
                                                </template>

                                                <v-list color="#29395a">
                                                    <v-list-item
                                                            v-for="item in newsItems"
                                                            :key="item.title"
                                                            link
                                                            dense
                                                            @click="goTo(item)"
                                                    >

                                                        <v-list-item-content>
                                                            <v-list-item-title   class="menu-text">{{ item.title }}</v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-list>
                                            </v-menu>
                                        </div>
                                        <div class="my-2">
                                            <v-btn
                                                    text color="white"
                                                    class="top-menu"
                                                    @click="goTo({id:11})"
                                            >
                                                关于我们
                                            </v-btn>
                                        </div>
                                        <div class="my-2">
                                            <v-btn
                                                    text color="white"
                                                    class="top-menu"
                                            >
                                                中英切换
                                            </v-btn>
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


        <v-footer padless>
            <slot name="footer"></slot>
        <Footer/>
        <LegalInfo/>
        </v-footer>
    </div>
</template>

<script>
    import Footer from "../components/Footer";
    import LegalInfo from "../components/LegalInfo";
    import {auctionItems, browseItems, childDeptItems, newsItems, warehouseItems} from "./MenuItem";
    export default {
        name: "Frame",
        components: {LegalInfo, Footer},
        data:()=>({
            warehouseItems,
            browseItems,
            auctionItems,
            childDeptItems,
            newsItems,
            floatingOptions:[
                {icon:'mdi-open-in-app',text:'我要展览展示',path:'/contact'},
                {icon:'mdi-gavel',text:'我要拍卖',path:'/contact'},
                {icon:'mdi-bank',text:'我要保税仓储',path:'/contact'},
                {icon:'mdi-account',text:'鉴证登记托管',path:'/contact'}
            ],
            selected:0
        }),
        methods:{
            async goTo(item){
                if(item.id !== undefined) {
                    const id = item.id
                    if (this.$store.state.userObj === null){
                        await this.$router.push('/view/static/' + id)
                        this.$router.go(0)
                        return
                    }
                    await this.$router.push('/view/static/' + id)
                    this.$router.go(0)
                }
                if(item.path !== undefined){
                    await this.$router.push(item.path)
                    this.$router.go(0)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $list-dense-content-padding : 0;
    .menu-text:hover{
        color: deeppink;
    }
    .menu-text{
        color: white;
    }
    .top-menu{
        margin-left: -0.5em;
        margin-right: -0.5em;
    }
</style>
