<template>
    <v-card tile>
        <jpa-data-table :repo="repo" :data-table-props="{
        'multi-sort':true,
        'footer-props':{
                'items-per-page-text': '每页显示项数:',
                'items-per-page-all-text': '所有项'
                },
               'no-data-text':'无数据'
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
