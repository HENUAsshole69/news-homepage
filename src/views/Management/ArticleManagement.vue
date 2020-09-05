<template>
    <v-container>
        <v-row>
            <v-col>
                <type-select @change="type = $event"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <admin-table :repo="repo()" :key="type+i" @update="i++" :type="type"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import AdminTable from "../../components/Editor/AdminTable";
    import TypeAndPubRepo from "../../client/TypeAndPubRepo";
    import TypeSelect from "../../components/Editor/TypeSelect";
    import IndividualRepo from "../../client/IndividualRepo";
    export default {
        name: "ArticleManagement",
        components: {TypeSelect, AdminTable},
        data:()=>({
            type:'NEWS',
            i:0
        }),
        methods:{
            repo(){
                if(this.$store.state.userObj.type === 'ADMIN'){
                    return{ fetch: TypeAndPubRepo(this.type,undefined)}
                }else {
                    return{ fetch: IndividualRepo(this.type)}
                }
            }
        },
        created() {
            if(this.$store.state.userObj.type !== 'ADMIN'){
                this.type = 'EXHIBITION'
            }
        }
    }
</script>

<style scoped>

</style>
