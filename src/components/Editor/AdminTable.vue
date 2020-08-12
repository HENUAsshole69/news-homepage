<template>
    <div>
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
        <template v-slot:item.actions="{ item }">
            <publish-btn v-bind="item"/>
            <del-btn v-bind="item" @deleted="$router.go(0)" />
            <edit-btn  v-bind="item"/>
            <v-btn class="ma-2" @click="editCover(item)" tile outlined color="success">
                <v-icon left>mdi-book</v-icon> 封面编辑
            </v-btn>
        </template>
        <template v-slot:item.headline="{ item }">
            <headline-checkbox :id="item.id" v-model="item.headline"/>
        </template>
    </jpa-data-table>
        <cover-editor-dialog :key="id" :dialog="dialog" :id="id" @close="dialog = false"/>
    </div>
</template>

<script>
    import JpaDataTable from "@lu1kaifeng/jpa-data-table/src/components/JpaDataTable";
    import TypeAndPubRepo from "../../client/TypeAndPubRepo";
    import PublishBtn from "./Admin/PublishBtn";
    import DelBtn from "./Admin/DelBtn";
    import EditBtn from "./Admin/EditBtn";
    import CoverEditorDialog from "../Cover/CoverEditorDialog";
    import HeadlineCheckbox from "./Admin/HeadlineCheckbox";

    export default {
        name: "AdminTable",
        components:{HeadlineCheckbox, CoverEditorDialog, EditBtn, DelBtn, PublishBtn, JpaDataTable},
        data:()=>({
            dialog:false,
            id:null
        }),
        props:{
            repo:Object
        },
        methods:{
            editCover(item){
                this.id = item.id.toString()
                this.dialog = true
            }
        }
    }
</script>

<style scoped>

</style>
