<template>
    <v-container fluid :style="{ backgroundImage: 'url(' + require('../../public/img/wjc_bg_02.jpg') + ')','background-size':'cover' }">
        <v-row class="d-flex justify-center">
            <v-col lg="8">
                <v-container>
                    <v-row>
                        <v-col class="d-flex justify-center" style="padding-right:0;margin-right: 0">
                            <v-card
                                    class="mx-auto"
                                    max-width="400"
                                    style="overflow: hidden;cursor: pointer;"
                            >
                                <v-img
                                        @click="$router.push('/view/'+6)"
                                        class="zoom white--text align-end"
                                        height="200px"
                                        :src="require('../../public/img/zxm1.jpg')"
                                >
                                    <v-card-title>艺术银行</v-card-title>
                                </v-img>

                                <v-card-text class="text--primary">
                                    <p>中国（河南）自由贸易区艺术银行服务中心通过与各大金融机构深度合作，搭建艺术品与金融市场桥梁，并围绕中国（河南）自由贸易区开封片区文化产业定位，充分利用自贸区政策红利及国际艺术品保税仓平台优势，构建艺术金融生态体系闭环，打造中国艺术金融中心、国际艺术金融高地。</p>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col  class="d-flex justify-center"  style="padding-left:0;margin-right: 0">
                            <v-card
                                    class="mx-auto"
                                    max-width="400"
                                    style="overflow: hidden;cursor: pointer;"
                            >
                                <v-img
                                        class="zoom white--text align-end"
                                        height="200px"
                                        :src="require('../../public/img/zxm2.jpg')"
                                >
                                    <v-card-title>
                                        社会文物登记服务中心
                                    </v-card-title>
                                </v-img>

                                <v-card-text class="text--primary">
                                    <p>文化企业产品展示区位于保税仓二楼的中心区域，将集中展示开封本土文化产业的产品</p>
                                    <p>目前已经在深圳文化产权交易所登记备案的开封文化企业有20余家，销售文化艺术品包含汴绣，官瓷，朱仙镇木版年画等等。
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="d-flex justify-center" style="padding-right:0;margin-right: 0">
                            <v-card
                                    class="mx-auto"
                                    max-width="400"
                                    style="overflow: hidden;cursor: pointer;"
                            >
                                <v-img
                                        class="zoom white--text align-end"
                                        height="200px"
                                        :src="require('../../public/img/zxm3.png')"
                                >
                                    <v-card-title>
                                        离退+电商
                                    </v-card-title>
                                </v-img>

                                <v-card-text class="text--primary">
                                    <p>对接国际知名电子商务巨头，构建国际跨境电商创新合作服务平台，联通信息流、资金流、物流和供应链体系，从而实现开封宋文化产品集成在保税仓，到跨境平台。</p>
                                    <p>在保税仓内，离境退税商店将展区内的文化艺术品进行整合，并联合国际知名电子商务巨头如ebay 、亚马逊 、shopy等，构建国际跨境电商创新合作服务平台，打通信息流、资金流、物流和供应链体系，从而实现开封宋文化产品集成在保税仓，到跨境平台进行数字贸易，再到境外市场的产业链体系。
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col  class="d-flex justify-center"  style="padding-left:0;margin-right: 0">
                            <v-card
                                    class="mx-auto"
                                    max-width="400"
                                    style="overflow: hidden;cursor: pointer;"
                            >
                                <v-img
                                        class="zoom white--text align-end"
                                        height="200px"
                                        :src="require('../../public/img/zxm4.png')"
                                >
                                    <v-card-title>
                                        艺术品托管平台
                                    </v-card-title>
                                </v-img>

                                <v-card-text class="text--primary">
                                    <p>艺术品托管平台</p>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Cards",
        components: {}
    }
</script>

<style scoped>
    .zoom {
        transition: transform .2s; /* Animation */
        margin: 0 auto;
    }
    .zoom:hover {
        transform: scale(1.1);
        color: red/* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    }
</style>
