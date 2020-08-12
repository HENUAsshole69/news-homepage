<template>
    <div>
        <v-app-bar
                app
                color="black"
                dark
                dense
        >
            <v-spacer/>
            <v-btn text color="white">登录</v-btn>|
            <v-btn text color="white">注册</v-btn>|
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
    <v-container>
        <v-row no-gutters>
            <v-col class="flex-grow-0">
                <img :src="require('../../public/img/logo.png')">
            </v-col>
            <v-col class="flex-grow-1">
                <v-container fluid>
                    <v-row no-gutters>
                        <div class="my-2">
                            <v-btn text color="white">首页</v-btn>
                        </div>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
        <v-row>
                <v-col class="flex-grow-0">
                    <v-list
                            dense
                            rounded
                            style="background-color: #585858"
                    >
                        <v-list-item style="padding: 0;margin: 0">
                            <img :src="require('../../public/img/tp1.png')">
                        </v-list-item>
                        <v-list-item
                                v-for="item in warehouseItems"
                                :key="item.title"
                                link
                        >
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title style="color: lightgray">{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item style="padding: 0;margin: 0">
                            <img :src="require('../../public/img/tp2.png')">
                        </v-list-item>
                        <v-list-item
                                v-for="item in browseItems"
                                :key="item.title"
                                link
                        >
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title style="color: lightgray">{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item style="padding: 0;margin: 0">
                            <img :src="require('../../public/img/tp3.png')">
                        </v-list-item>
                        <v-list-item
                                v-for="item in auctionItems"
                                :key="item.title"
                                link
                        >
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title style="color: lightgray">{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item style="padding: 0;margin: 0">
                            <img :src="require('../../public/img/tp4.png')">
                        </v-list-item>
                        <v-list-item
                                v-for="item in childDeptItems"
                                :key="item.title"
                                link
                        >
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title style="color: lightgray">{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col>
                    <v-row>
                    <home-carousel/>
                    </v-row>
                    <v-row>
                        <v-col><news-viewer/></v-col>

                    </v-row>
                </v-col>
        </v-row>
    </v-container>
</v-container>
        <tax-free/>
        <browse/>
        <Cards/>
        <HonorWall/>
        <Footer/>
        <LegalInfo/>
    </div>
</template>

<script>

import NewsViewer from "@/components/NewsViewer";
import TaxFree from "@/components/TaxFree";
import Browse from "@/components/Exhibition";
import Cards from "@/components/Cards";
import HonorWall from "@/components/HonorWall";
import Footer from "@/components/Footer";
import LegalInfo from "@/components/LegalInfo";
import HomeCarousel from "@/components/Home/HomeCarousel";
export default {
  name: 'Home',
  components: {
      HomeCarousel,
      LegalInfo,
      Footer,
      HonorWall,
      Cards,
      Browse,
      TaxFree,
      NewsViewer

  },
  data:()=>({
    s:null,
      warehouseItems:[
          {title:'艺术品介绍',icon:''},
          {title:'保存介绍',icon:''},
          {title:'海关监管',icon:''},
      ],
      browseItems:[
          {title:'书画展',icon:''},
          {title:'瓷器展',icon:''},
          {title:'杂项展',icon:''},
          {title:'展讯介绍',icon:''}
      ],
      auctionItems:[
          {title:'春秋',icon:''},
          {title:'望塑',icon:''},
          {title:'网拍',icon:''},
          {title:'拍卖厅介绍',icon:''}
      ],
      childDeptItems:[
          {title:'艺术银行',icon:''},
          {title:'社会文物登记服务中心',icon:''},
          {title:'离退+电商',icon:''},
          {title:'艺术品托管平台',icon:''}
      ]
  })
}
</script>

<style lang="scss">

</style>
