<template>
    <v-container>
        <v-row>
            <v-col>
                <type-select @change="type = $event"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <admin-table :repo="repo()" :key="type" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import AdminTable from "../../components/Editor/AdminTable";
    import TypeAndPubRepo from "../../client/TypeAndPubRepo";
    import TypeSelect from "../../components/Editor/TypeSelect";
    export default {
        name: "ArticleManagement",
        components: {TypeSelect, AdminTable},
        data:()=>({
            type:'NEWS'
        }),
        methods:{
            repo(){
                return{ fetch: TypeAndPubRepo(this.type,undefined)}
            }
        }
    }
</script>

<style scoped>

</style>
