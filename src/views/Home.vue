<template>
    <div>
        <Frame>
    <v-container fluid style="padding: 0;margin: 0;">
        <v-row no-gutters class="d-flex justify-center">
            <v-col lg="8">
                <v-row style="padding-top: 0;margin-top: 0" class="flex-nowrap">
                <v-col  class="flex-grow-0">
                    <v-list
                            dense
                            rounded
                            style="background-color: #182235"
                    >
                        <v-list-item style="padding: 0;margin: 0">
                            <img :src="require('../../public/img/tp1.png')">
                        </v-list-item>
                        <v-list-item
                                v-for="item in warehouseItems"
                                :key="item.title"
                                link
                                @click="goTo(item)"
                                class="tile"
                        >
                            <v-list-item-icon>
                                <v-icon color="#848a89">{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title style="color: #848a89">{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item style="padding: 0;margin: 0">
                            <img :src="require('../../public/img/tp2.png')">
                        </v-list-item>
                        <v-list-item
                                v-for="item in browseItems"
                                :key="item.title"
                                link
                                @click="goTo(item)"
                                class="tile"
                        >
                            <v-list-item-icon>
                                <v-icon  color="#848a89">{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title style="color: #848a89">{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item style="padding: 0;margin: 0">
                            <img :src="require('../../public/img/tp3.png')">
                        </v-list-item>
                        <v-list-item
                                v-for="item in auctionItems"
                                :key="item.title"
                                link
                                @click="goTo(item)"
                                class="tile"
                        >
                            <v-list-item-icon>
                                <v-icon  color="#848a89">{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title style="color: #848a89">{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item style="padding: 0;margin: 0">
                            <img :src="require('../../public/img/tp4.png')">
                        </v-list-item>
                        <v-list-item
                                v-for="item in childDeptItems"
                                :key="item.title"
                                link
                                @click="goTo(item)"
                                class="tile"
                        >
                            <v-list-item-icon>
                                <v-icon  color="#848a89">{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title style="color: #848a89">{{ item.title }}</v-list-item-title>
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
            </v-col>
        </v-row>
    </v-container>
            <template v-slot:footer>
                <tax-free/>
                <browse/>
                <auction/>
                <Cards/>
                <HonorWall/>
            </template>
        </Frame>
    </div>
</template>

<script>

import NewsViewer from "@/components/NewsViewer";
import TaxFree from "@/components/TaxFree";
import Browse from "@/components/Exhibition";
import Cards from "@/components/Cards";
import HonorWall from "@/components/HonorWall";
import HomeCarousel from "@/components/Home/HomeCarousel";
import Frame from "./Frame";
import {auctionItems, browseItems, childDeptItems, warehouseItems} from "./MenuItem";
import Auction from "../components/Auction";
export default {
  name: 'Home',
  components: {
      Auction,
      Frame,
      HomeCarousel,
      HonorWall,
      Cards,
      Browse,
      TaxFree,
      NewsViewer

  },
  data:()=>({
    s:null,
      warehouseItems,
      browseItems,
      auctionItems,
      childDeptItems
  }),
    methods:{
      goTo(item){
          if(item.id !== undefined) {
              const id = item.id
              if (this.$store.state.userObj === null) return this.$router.push('/view/static/' + id)

              this.$router.push('/view/static/' + id)
          }
          if(item.path !== undefined){
              this.$router.push(item.path)
          }
      }
    }
}
</script>

<style lang="scss">
    .tile:hover {
        background-color: #29395a;
    }
</style>
