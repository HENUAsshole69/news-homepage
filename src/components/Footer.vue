<template>
    <v-container fluid :style="{ 'background-size':'cover' }">
        <v-row no-gutters class="d-flex justify-center">
            <v-col lg="8">
                <v-container>
                    <v-row no-gutters>
                        <v-col class="text d-flex justify-center" cols="6" style="padding-right:0;margin-right: 0;">
                            <v-container fluid class="item">
                            <v-row no-gutters class="flex-nowrap">
                                <v-col>

                                    <div>
                                        <v-card-title class="subheading font-weight-bold">友情链接</v-card-title>

                                        <v-divider></v-divider>

                                        <v-list dense style="background: #00000000;margin: 0;padding: 0;">
                                            <v-list-item>
                                                <v-list-item-avatar class="text item-text">自贸区</v-list-item-avatar>
                                                <v-list-item-content class="align-end text"><friendly-link-select/></v-list-item-content>
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
                        <v-col class="text" style="padding-right:0;margin-right: 0" cols="6">
                            <v-container fluid class="item">
                                <v-row no-gutters>
                                    <v-col cols="10">
                                        <div>
                                            <v-card-title class="text subheading font-weight-bold">国际艺术品保税仓</v-card-title>

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
