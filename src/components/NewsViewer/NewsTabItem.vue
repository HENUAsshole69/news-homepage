<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <cover-viewer v-bind:id="currentNews.toString()" :key="currentNews"/>
            </v-col>
            <v-col>
                <jpa-data-table style="padding: 0;margin: 0" :repo="repos[tab - 1]" :data-table-props="{
        'multi-sort':true
      }"
      :data-table-events="{
        'item-selected':click
      }"
                >
                    <template v-slot:item="{item}">
                        <tr @mouseover="currentNews = item.id" @click="()=>click(item.id)">
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
            currentNews:0,
            repos:[
                { fetch: TypeAndPubRepo("ACTIVITY",true)},
                { fetch: TypeAndPubRepo("POLICY",true)},
                { fetch: TypeAndPubRepo("NEWS",true)},
                { fetch: TypeAndPubRepo("ANNOUNCE",true)}
            ],
            loading:true
        }),
        methods:{
            repo(){
                return{ fetch: TypeAndPubRepo("NEWS",true)}
            },
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
