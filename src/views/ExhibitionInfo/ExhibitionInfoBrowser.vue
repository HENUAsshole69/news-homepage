<template>
    <Frame>
        <v-container>
            <v-row class="d-flex justify-center">
                <v-col xl="7">
                    <v-sheet width="900">
                        <v-container fluid>
                            <v-row no-gutters class="d-flex justify-center">
                                <v-col>
                                    <jpa-data-iterator style="bottom: 0;width: 100%" :repo="{ fetch: TypeAndPubRepo('EXHIBITION_INFO',true)}" :data-table-props="{
        'multi-sort':true,
        'footer-props':{
                'items-per-page-text': '每页显示项数:',
                'items-per-page-all-text': '所有项',
                'items-per-page-options':[12]
                },
               'no-data-text':'无数据'
      }">
                                        <template v-slot:default="{items}">
                                            <v-container>
                                                <v-row class="d-flex justify-center align-center"  :key="item.id" v-for="item in items">
                                                    <v-col class="flex-grow-0">

                                                        <info-entry v-bind:id="item.id"/>
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
    import JpaDataIterator from "@lu1kaifeng/jpa-data-table/src/components/JpaDataIterator";
    import Frame from "../Frame";
    import TypeAndPubRepo from '../../client/TypeAndPubRepo';
    import InfoEntry from "./InfoEntry";
    export default {
        name: "ExhibitionInfoBrowser",
        components: {InfoEntry, Frame,JpaDataIterator},
        props:{
        },
        data:()=>({
        }),
        methods:{
            TypeAndPubRepo
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
