<template>
    <v-card
            outlined
            tile
    >
        <v-list-item>
            <v-list-item-content  style="padding: 0;margin: 0">
                <v-row no-gutters  style="padding: 0;margin: 0">
                <v-col class="overline my-2"><h3>信息公开</h3></v-col>
                <v-col style="padding: 0;margin: 0">
                    <v-tabs
                            background-color="white"
                            color="white"
                            right
                            height="2em"
                            class="tab"
                            hide-slider
                            active-class="brown-tab"
                            v-model="tab"
                    >
                        <v-tab>活动</v-tab>
                        <v-tab>政策</v-tab>
                        <v-tab>要闻</v-tab>
                        <v-tab>公告</v-tab>
                    </v-tabs>
                </v-col>
                </v-row>
            </v-list-item-content>
        </v-list-item>
        <v-list-item>
            <v-container fluid  style="padding: 0;margin: 0">
            <v-row no-gutter>
                <v-col  style="padding: 0;margin: 0">
                <v-tabs-items v-model="tab">
                    <v-tab-item
                            v-for="i in 4"
                            :key="i"
                    >
                        <news-tab-item :key="i" :tab="i"/>
                    </v-tab-item>
                </v-tabs-items>
                </v-col>
            </v-row>
            </v-container>
        </v-list-item>
        <v-row style="padding: 0;margin: 0;background-color: #f4f4f4" class="d-flex justify-center" no-gutter>
            <button @click="$router.push('/list/'+types[tab])"><v-col class="flex-grow-0 load-more">查看更多</v-col></button>
        </v-row>
    </v-card>
</template>

<script>
    import NewsTabItem from "@/components/NewsViewer/NewsTabItem";
    export default {
        name: "NewsViewer",
        components: {NewsTabItem},
        data:()=>({
            tab:0,
            types: [
                'ACTIVITY',
                'POLICY',
                'NEWS',
                'ANNOUNCE'
            ]
        })
    }
</script>

<style scoped lang="scss">
    @import "../load-more.scss";
    .brown-tab{
        background-color: #c9a035;
    }
    .tab{
        padding: 0.5em;
    }
</style>
