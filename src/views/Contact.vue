<template>
    <Frame>
        <v-container>
            <v-row class="d-flex justify-center">
                <v-col md="10" lg="8" sm="11">
                    <v-card flat tile>
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-img height="300px" contain :src="require('../../public/img/logo-big.png')"/>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-img height="200px" contain :src="require('../../public/img/art_code.jpg')"/>
                                </v-col>
                            </v-row>
                            <v-row class="d-flex justify-center">
                                <v-col cols="6">
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
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </Frame>
</template>

<script>
    import Frame from "./Frame";
    export default {
        name: "Contact",
        components: {Frame}
    }
</script>

<style scoped>

</style>
