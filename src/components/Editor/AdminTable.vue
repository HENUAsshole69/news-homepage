<template>
    <jpa-data-table :repo="repo()" :data-table-props="{
        'multi-sort':true
      }" >
        <template v-slot:footer.page-text="{pageStart,pageStop,itemsLength}">
            {{pageStart+' '+pageStop+' '+itemsLength}}
        </template>
        <template v-slot:item.actions="{ item }">
            <publish-btn v-bind="item"/>
            <del-btn v-bind="item"/>
            <edit-btn  v-bind="item"/>
        </template>
    </jpa-data-table>
</template>

<script>
    import JpaDataTable from "@lu1kaifeng/jpa-data-table/src/components/JpaDataTable";
    import TypeAndPubRepo from "../../client/TypeAndPubRepo";
    import PublishBtn from "./Admin/PublishBtn";
    import DelBtn from "./Admin/DelBtn";
    import EditBtn from "./Admin/EditBtn";

    export default {
        name: "AdminTable",
        components:{EditBtn, DelBtn, PublishBtn, JpaDataTable},
        methods:{
            repo(){
                return{ fetch: TypeAndPubRepo("NEWS",undefined)}
            }
        }
    }
</script>

<style scoped>

</style>
