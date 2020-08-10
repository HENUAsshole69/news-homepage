<template>
    <div>
    <jpa-data-table :repo="repo" :data-table-props="{
        'multi-sort':true
      }" >
        <template v-slot:footer.page-text="{pageStart,pageStop,itemsLength}">
            {{pageStart+' '+pageStop+' '+itemsLength}}
        </template>
        <template v-slot:item.actions="{ item }">
            <publish-btn v-bind="item"/>
            <del-btn v-bind="item"/>
            <edit-btn  v-bind="item"/>
            <v-btn class="ma-2" @click="editCover(item)" tile outlined color="success">
                <v-icon left>mdi-trash-can-outline</v-icon> 封面编辑
            </v-btn>
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

    export default {
        name: "AdminTable",
        components:{CoverEditorDialog, EditBtn, DelBtn, PublishBtn, JpaDataTable},
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
