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
                            color="brown"
                            right
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
    </v-card>
</template>

<script>
    import NewsTabItem from "@/components/NewsViewer/NewsTabItem";
    export default {
        name: "NewsViewer",
        components: {NewsTabItem},
        data:()=>({
            tab:0
        })
    }
</script>

<style scoped>

</style>
