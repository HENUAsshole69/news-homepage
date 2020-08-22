<template>
    <v-container fluid style="padding: 0;margin: 0">
        <v-row no-gutters>
            <v-col>
                <cover-viewer v-bind:id="currentNews.toString()" :key="currentNews"/>
            </v-col>
            <v-col style="padding: 0;margin: 0" >
                <jpa-data-table style="padding: 0;margin: 0" :repo="repos[tab - 1]" :data-table-props="{
        'multi-sort':true,
        'footer-props':{
                'items-per-page-text': '每页显示项数:',
                'items-per-page-all-text': '所有项'
                },
               'no-data-text':'无数据'
      }"
      :data-table-events="{
        'item-selected':click
      }"
                >
                    <template v-slot:item="{item}">
                        <tr @mouseover="currentNews = item.id" @click="()=>click(item.id)">
                            <td>{{item.title}}</td>
                            <td>{{ new Date(item.time).toLocaleDateString() }}</td>
                        </tr>
                    </template>
                    <template v-slot:footer.page-text="{pageStart,
  pageStop,
  itemsLength}">
                        {{'从第'+pageStart+'项至第'+pageStop+'项，共'+itemsLength+'项'}}
                    </template>
                </jpa-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import JpaDataTable from "@lu1kaifeng/jpa-data-table/src/components/JpaDataTable";
    import TypeAndPubRepo from "../../client/TypeAndPubRepo";
    import CoverViewer from "@/components/Cover/CoverViewer";
    export default {
        name: "NewsTabItem",
        components:{CoverViewer, JpaDataTable},
        props:{
            tab:Number
        },
        data:()=>({
            pageData:[],
            currentNews:0,
            repos:[
                { fetch: TypeAndPubRepo("ACTIVITY",true)},
                { fetch: TypeAndPubRepo("POLICY",true)},
                { fetch: TypeAndPubRepo("NEWS",true)},
                { fetch: TypeAndPubRepo("ANNOUNCE",true)}
            ],
            loading:true
        }),
        mounted() {
            const repo = this.repos[this.tab - 1]
            this.currentNews = repo.fetch({
                page:1,
                size:1,
                sort:[]
            }).content[0].id
        },
        methods:{
            click(id){
                this.$router.push("/view/"+id)
            }
        }
    }
</script>

<style scoped>
    .center {
        position: absolute;
        top: 50%;
        left:50%;
        width: 100%;
        transform: translate(-50%,-50%);
    }
</style>
