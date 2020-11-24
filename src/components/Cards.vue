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
                                        @click="$router.push('/view/static/'+6)"
                                        class="zoom white--text align-end"
                                        height="200px"
                                        :src="require('../../public/img/zxm1.jpg')"
                                >
                                    <v-card-title>艺术银行金融服务中心</v-card-title>
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
                                        @click="$router.push('/view/static/'+7)"
                                        :src="require('../../public/img/zxm2.png')"
                                >
                                    <v-card-title>
                                      社会文物登记服务中心与艺术品鉴证服务中心
                                    </v-card-title>
                                </v-img>

                                <v-card-text class="text--primary">
                                    <p>在河南省文物局与开封自贸区管委会的支持下，特设立社会文物登记服务中心与艺术品鉴证服务中心，通过专家鉴定与科技检测，为社会文物和艺术品进行鉴证，确权，评估，并出具专业鉴定意见与登记证书，为收藏家保驾护航，为艺术品金融化提供专业保障。</p>
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
                                        @click="$router.push('/view/static/'+8)"
                                        :src="require('../../public/img/zxm3.png.jpg')"
                                >
                                    <v-card-title>
                                        离境退税店与跨境电商
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
                                        @click="$router.push('/view/static/'+9)"
                                        :src="require('../../public/img/zxm4.png')"
                                >
                                    <v-card-title>
                                      艺术品托管中心
                                    </v-card-title>
                                </v-img>

                                <v-card-text class="text--primary">
                                    <p>艺术品托管中心是中国（河南）自贸区国际艺术品保税仓仓储，展示，拍卖等功能的集中体现，是实现艺术品资产化的平台，是艺术金融业务的资源库。经过鉴证评估的各类艺术资产可在托管中心挂牌展示，通过保税仓的平台吸引潜在消费者，促进艺术品交易流通。</p>
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
