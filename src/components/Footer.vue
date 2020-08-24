<template>
    <v-container fluid :style="{ 'background-size':'cover' }">
        <v-row no-gutters class="d-flex justify-center">
            <v-col lg="8">
                <v-container>
                    <v-row no-gutters>
                        <v-col class="text d-flex justify-center" style="padding-right:0;margin-right: 0;">
                            <v-container fluid class="item">
                            <v-row no-gutters>
                                <v-col>
                                    <div>
                                        <v-card-title class="text subheading font-weight-bold">国际艺术品保税仓</v-card-title>

                                        <v-divider style="color:white;"></v-divider>

                                        <v-list dense style="background: #00000000;margin: 0;padding: 0;">
                                            <v-list-item>
                                                <v-list-item-content class="text  item-text">地址：</v-list-item-content>
                                                <v-list-item-content class="align-end text"></v-list-item-content>
                                            </v-list-item>

                                            <v-list-item>
                                                <v-list-item-content class="text  item-text">电话：</v-list-item-content>
                                                <v-list-item-content class="align-end text"></v-list-item-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-content class="text  item-text">邮箱：</v-list-item-content>
                                                <v-list-item-content class="align-end text"></v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row no-gutters>
                                <v-col>
                                    <div>
                                        <v-card-title class="text subtitle-2 font-weight-bold"><p class="my-2" style="color: #525261;padding-right: 0.5em">关于</p>开封数字文化投资有限公司</v-card-title>

                                        <v-divider style="color:white;"></v-divider>

                                        <v-list dense style="background: #00000000;margin: 0;padding: 0;">
                                            <v-list-item>
                                                <v-list-item-content class="text item-text">艺术品托管</v-list-item-content>
                                                <v-list-item-content class="align-end text"></v-list-item-content>
                                            </v-list-item>

                                            <v-list-item>
                                                <v-list-item-content class="text item-text">展览展示</v-list-item-content>
                                                <v-list-item-content class="align-end text"></v-list-item-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-content class="text item-text">拍卖拍买</v-list-item-content>
                                                <v-list-item-content class="align-end text"></v-list-item-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-content class="text item-text">艺术银行</v-list-item-content>
                                                <v-list-item-content class="align-end text"></v-list-item-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-content class="text item-text">社会文物登记</v-list-item-content>
                                                <v-list-item-content class="align-end text"></v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                    </div>
                                </v-col>
                            </v-row>
                            </v-container>

                        </v-col>
                        <v-col class="text" style="padding-right:0;margin-right: 0">
                            <v-container fluid class="item">
                                <v-row no-gutters>
                                    <v-col>
                                        <div>
                                            <v-card-title class="subheading font-weight-bold">友情链接</v-card-title>

                                            <v-divider></v-divider>

                                            <v-list dense style="background: #00000000;margin: 0;padding: 0;">
                                                <v-list-item>
                                                    <v-list-item-content class="text item-text">自贸区</v-list-item-content>
                                                    <v-list-item-content class="align-end text"></v-list-item-content>
                                                </v-list-item>

                                                <v-list-item>
                                                    <v-list-item-content class="text item-text">保税仓</v-list-item-content>
                                                    <v-list-item-content class="align-end text"></v-list-item-content>
                                                </v-list-item>
                                            </v-list>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-container>

                        </v-col>
                        <v-col class="d-flex justify-center" style="padding-right:0;margin-right: 0">

                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    export default {
        name: "Footer",

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
