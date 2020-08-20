<template>
    <v-card
            outlined
            tile
    >
        <v-list-item>
            <v-list-item-content>
                <v-row no-gutters>
                <v-col class="overline mb-5"><h3>信息公开</h3></v-col>
                <v-col>
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
            <v-container fluid>
            <v-row no-gutter>
                <v-col>
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
