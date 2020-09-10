<template>
    <Frame>
        <v-container>
            <v-row no-gutters class="d-flex justify-center">
                <v-col xl="7">
                    <v-sheet width="900">
                        <v-container fluid style="padding: 0;margin: 0">
                            <v-row no-gutters class="d-flex justify-center">
                                <v-col>
                                    <jpa-data-table :repo="


{ fetch: NewsTypeAndPubRepo(type,true)}" :data-table-props="{
        'multi-sort':true,
        'footer-props':{
                'items-per-page-text': '每页显示项数:',
                'items-per-page-all-text': '所有项',
                'items-per-page-options':[10,20,30]
                },
               'no-data-text':'无数据',

      }">
                                        <template v-slot:footer.page-text="{pageStart,
  pageStop,
  itemsLength}">
                                            {{'从第'+pageStart+'项至第'+pageStop+'项，共'+itemsLength+'项'}}
                                        </template>
                                        <template v-slot:item="{item}">
                                            <tr @click="()=>click(item.id)" style="cursor: pointer">
                                                <td>{{item.title}}</td>
                                                <td>{{ new Date(item.time).toLocaleDateString() }}</td>
                                            </tr>
                                        </template>
                                    </jpa-data-table>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>

    </Frame>
</template>

<script>
    import JpaDataTable from "@lu1kaifeng/jpa-data-table/src/components/JpaDataTable";
    import Frame from "../Frame";
    import NewsTypeAndPubRepo from '../../client/NewsTypeAndPubRepo';
    export default {
        name: "ListBrowser",
        components: {Frame,JpaDataTable},
        props:{
            type:String,
            subType:String
        },
        data:()=>({
        }),
        methods:{
            NewsTypeAndPubRepo,
            click(id){
                this.$router.push("/view/"+id)
            }
        }
    }
</script>

<style scoped>
    .mh-100 {
        min-height: 94vh;
        max-height: 94vh;
        height: 94vh;
    }

    .overflow-hidden {
        overflow: hidden;
    }
</style>
