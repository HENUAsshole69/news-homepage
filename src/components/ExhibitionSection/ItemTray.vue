<template>
    <v-card tile flat  style="padding: 0;margin: 0">
    <jpa-data-iterator  style="padding: 0;margin: 0" :repo="repo" :data-table-props="{
        'multi-sort':true,
        'footer-props':{
                'items-per-page-text': '每页显示项数:',
                'items-per-page-all-text': '所有项'
                },
               'no-data-text':'无数据'
      }">
        <template v-slot:default="{items}">
            <v-container>
                <v-row>
                    <v-col :key="item.id" v-for="item in items">
                        <item-card v-bind="item"/>
                    </v-col>
                </v-row>
            </v-container>
        </template>
        <template v-slot:footer.page-text="{pageStart,
  pageStop,
  itemsLength}">
            {{'从第'+pageStart+'项至第'+pageStop+'项，共'+itemsLength+'项'}}
        </template>
    </jpa-data-iterator>
    </v-card>
</template>

<script>
    import JpaDataIterator from "@lu1kaifeng/jpa-data-table/src/components/JpaDataIterator";
    import ItemCard from "@/components/ExhibitionSection/ItemCard";
    export default {
        name: "ItemTray",
        components:{JpaDataIterator,ItemCard},
        props:{
            repo: Object
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
