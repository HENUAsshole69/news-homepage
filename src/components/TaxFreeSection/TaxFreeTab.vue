<template>
    <v-card tile style="width: 40em;padding: 0;margin: 0">
        <jpa-data-table :repo="repo" :data-table-props="{
        'multi-sort':true,
        'footer-props':{
                'items-per-page-text': '每页显示项数:',
                'items-per-page-all-text': '所有项'
                },
               'no-data-text':'无数据',
               'hide-default-footer':true,
               'items-per-page':'9'
      }">
            <template v-slot:footer.page-text="{pageStart,
  pageStop,
  itemsLength}">
                {{'从第'+pageStart+'项至第'+pageStop+'项，共'+itemsLength+'项'}}
            </template>
            <template v-slot:item="{item}">
                <tr @click="()=>click(item.id)">
                    <td>{{item.title}}</td>
                    <td>{{ new Date(item.time).toLocaleDateString() }}</td>
                </tr>
            </template>
        </jpa-data-table>
        <v-row style="padding: 0;margin: 0;background-color: #f4f4f4" class="d-flex justify-center" no-gutter>
            <button @click="$router.push('/list/TAX_FREE')"><v-col class="flex-grow-0 load-more">查看更多</v-col></button>
        </v-row>
    </v-card>
</template>

<script>
    import JpaDataTable from "@lu1kaifeng/jpa-data-table/src/components/JpaDataTable";
    import TypeAndPubRepo from "@/client/TypeAndPubRepo";

    export default {
        name: "TaxFreeTab",
        components:{JpaDataTable},
        props:{
            repo: Object
        },
    methods:{
        click(id){
            this.$router.push("/view/"+id)
        }
    }
    }
</script>

<style scoped>

</style>
