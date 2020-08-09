<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <cover-viewer v-bind:id="currentNews.toString()" :key="currentNews"/>
            </v-col>
            <v-col>
                <jpa-data-table style="padding: 0;margin: 0" :repo="repo()" :data-table-props="{
        'multi-sort':true
      }"
      :data-table-events="{
        'item-selected':click
      }"
                >
                    <template v-slot:item="{item}">
                        <tr @mouseover="currentNews = item.id">
                            <td>{{item.title}}</td>
                            <td>{{ item.time }}</td>
                        </tr>
                    </template>
                    <template v-slot:footer.page-text="{pageStart,pageStop,itemsLength}">
                        {{pageStart+' '+pageStop+' '+itemsLength}}
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
            currentNews:0
        }),
        methods:{
            repo(){
                return{ fetch: TypeAndPubRepo("NEWS",true)}
            },
            click(event){
                alert(event)
            }
        }
    }
</script>

<style scoped>

</style>
