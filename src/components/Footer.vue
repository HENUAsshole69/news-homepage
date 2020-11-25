<template>
    <v-container fluid :style="{ 'background-size':'cover' }">
        <v-row no-gutters class="d-flex justify-center">
            <v-col lg="8">
                <v-container>
                    <v-row no-gutters class="d-flex justify-center">
                        <v-col class="text d-flex justify-center" cols="auto" lg="10" style="padding-right:0;margin-right: 0;">
                            <v-container fluid class="item ">
                            <v-row no-gutters class="flex-nowrap">


                                <v-col cols="6">
                                  <v-card-title class="text subheading font-weight-bold">中国（河南）自贸区国际艺术品保税仓</v-card-title>

                                  <v-divider style="color:white;"></v-divider>
                                  <v-list dense style="background: #00000000;margin: 0;padding: 0;">
                                    <v-list-item>
                                      <v-list-item-avatar class="text  item-text ">地址：</v-list-item-avatar>
                                      <v-list-item-content class="align-start text">河南省开封市郑开大道与八大街交叉口绿地6号楼</v-list-item-content>
                                    </v-list-item>

                                    <v-list-item>
                                      <v-list-item-avatar class="text  item-text">电话：</v-list-item-avatar>
                                      <v-list-item-content class="align-end text">0371-23333063</v-list-item-content>
                                    </v-list-item>
                                  </v-list>
                                  <v-divider style="color:white;"></v-divider>
                                  <v-list dense style="background: #00000000;margin: 0;padding: 0;">
                                    <v-list-item>
                                      <v-list-item-content class="text  item-text ">保税仓储：</v-list-item-content>
                                      <v-list-item-content class="align-start text">白先生 17637816793</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                      <v-list-item-content class="text  item-text">展览展示：</v-list-item-content>
                                      <v-list-item-content class="align-end text">崔女士 18637868135</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                      <v-list-item-content class="text  item-text">拍卖：</v-list-item-content>
                                      <v-list-item-content class="align-end text">胡先生 15515699120</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                      <v-list-item-content class="text  item-text">文物艺术品鉴证登记：</v-list-item-content>
                                      <v-list-item-content class="align-end text">高先生 15137877370</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                      <v-list-item-content class="text  item-text">艺术银行：</v-list-item-content>
                                      <v-list-item-content class="align-end text">康女士 17839052568</v-list-item-content>
                                    </v-list-item>
                                  </v-list>
                                </v-col>

                                <v-col cols="6">

                                       <!-- <v-card-title class="subheading font-weight-bold">友情链接</v-card-title>-->

                                        <v-divider></v-divider>

                                        <v-list dense style="background: #00000000;margin: 0;padding: 0;">
                                            <v-list-item>
                                                <v-list-item-avatar class="text item-text">自贸区</v-list-item-avatar>
                                                <v-list-item-content class="align-end text"><friendly-link-select/></v-list-item-content>
                                            </v-list-item>

                                          <v-list-item><v-list-item-content><v-img height="150px" contain :src="require('../../public/img/logo-big.png')"/></v-list-item-content></v-list-item>

                                          <v-list-item><v-list-item-content><v-img height="150px" contain :src="require('../../public/img/art_code.jpg')"/></v-list-item-content></v-list-item>
                                        </v-list>

                                </v-col>
                            </v-row>
                            </v-container>

                        </v-col>


                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    import FriendlyLinkSelect from "./FriendlyLinkSelect";
    export default {
        name: "Footer",
        components: {FriendlyLinkSelect},
    }
</script>

<style scoped>
.text{
    color: #8c8ca5;
}
    .item-text{
        font-size: small;
    }

    *{
        background-color: #1a1a34;
    }
.item{
    padding: 0;
    margin: 0;
}
</style>
