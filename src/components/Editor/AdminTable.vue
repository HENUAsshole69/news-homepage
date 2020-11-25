<template>
    <div>
    <jpa-data-table :repo="repo" :data-table-props="{
        'multi-sort':true,
        'footer-props':{
                'items-per-page-text': '每页显示项数:',
                'items-per-page-all-text': '所有项',
                'items-per-page-options':[5,10,15]
                },
               'no-data-text':'无数据'

      }">
        <template v-slot:footer.page-text="{pageStart,
  pageStop,
  itemsLength}">
            {{'从第'+pageStart+'项至第'+pageStop+'项，共'+itemsLength+'项'}}
        </template>
        <template v-slot:item.actions="{ item }">
            <publish-btn v-bind="item" v-if="$store.state.userObj.type === 'ADMIN'"/>
            <del-btn v-bind="item" @deleted="$emit('update')" />
            <edit-btn  v-bind="item"/>
            <v-btn class="ma-2" @click="editCover(item)" tile outlined color="success">
                <v-icon left>mdi-book</v-icon> 前台显示图片
            </v-btn>
            <ware-house-info-btn v-if="type === 'TAX_FREE'" @click="()=>editWareHouseInfo(item.id)"/>
        </template>
        <template v-slot:item.headline="{ item }">
            <headline-checkbox :id="item.id" v-model="item.headline"/>
        </template>
        <template v-slot:item.top="{ item }">
            <stay-top-checkbox :id="item.id" v-model="item.top"/>
        </template>
        <template v-slot:item.time="{ item }">
            {{ new Date(item.time).toLocaleDateString() }}
        </template>
    </jpa-data-table>
        <cover-editor-dialog :key="id" :dialog="dialog" :id="id" @close="dialog = false"/>
        <ware-house-info-dialog v-model="wareHouseDialog" :key="wareHouseDialogId" :id="wareHouseDialogId"/>
    </div>
</template>

<script>
    import JpaDataTable from "@lu1kaifeng/jpa-data-table/src/components/JpaDataTable";
    import {TypeToDisplayMap} from "@/model/TypeToDisplayMap";
    import PublishBtn from "./Admin/PublishBtn";
    import DelBtn from "./Admin/DelBtn";
    import EditBtn from "./Admin/EditBtn";
    import CoverEditorDialog from "../Cover/CoverEditorDialog";
    import HeadlineCheckbox from "./Admin/HeadlineCheckbox";
    import WareHouseInfoBtn from "./Admin/WareHouseInfoBtn";
    import WareHouseInfoDialog from "../WareHouseInfoDialog";
    import StayTopCheckbox from "./Admin/StayTopCheckbox";

    export default {
        name: "AdminTable",
        components:{
            StayTopCheckbox,
            WareHouseInfoDialog,
            WareHouseInfoBtn, HeadlineCheckbox, CoverEditorDialog, EditBtn, DelBtn, PublishBtn, JpaDataTable},
        data:()=>({
            dialog:false,
            id:null,
            TypeToDisplayMap,
            wareHouseDialog:false,
            wareHouseDialogId:0
        }),
        props:{
            repo:Object,
            type:String
        },
        methods:{
            editCover(item){
                this.id = item.id.toString()
                this.dialog = true
            },
            editWareHouseInfo(id){
                this.wareHouseDialogId = id
                this.wareHouseDialog = true
            }
        }
    }
</script>

<style scoped>

</style>
