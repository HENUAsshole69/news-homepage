<template>
                <v-content>

                            <jpa-data-iterator class="mh-100" :repo="{ fetch: SubTypeRepo(this.type,this.subType)}" :data-table-props="{
        'multi-sort':true,
        'footer-props':{
                'items-per-page-text': '每页显示项数:',
                'items-per-page-all-text': '所有项'
                },
               'no-data-text':'无数据'
      }">
                                <template v-slot:default="{items}">
                                        <v-row  class="fill-height overflow-auto">
                                            <div style="padding: 1em" :key="item.id" v-for="item in items" >
                                                <category-item-card v-bind="item"/>
                                            </div>
                                        </v-row>
                                </template>
                                <template v-slot:footer.page-text="{pageStart,
  pageStop,
  itemsLength}">
                                    {{'从第'+pageStart+'项至第'+pageStop+'项，共'+itemsLength+'项'}}
                                </template>
                            </jpa-data-iterator>

                </v-content>
</template>

<script>
    import JpaDataIterator from "@lu1kaifeng/jpa-data-table/src/components/JpaDataIterator";
    import SubTypeRepo from "../../client/SubTypeRepo";
    import CategoryItemCard from "./CategoryItemCard";
    export default {
        name: "CategoryBrowser",
        components: {CategoryItemCard,JpaDataIterator},
        props:{
            type:String,
            subType:String
        },
        data:()=>({
        }),
        methods:{
            SubTypeRepo
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
