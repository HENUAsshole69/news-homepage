<template>
    <v-container>
        <v-row>
            <v-col>
                <type-select @change="type = $event"/>
                <artifact-sub-type-select v-if="type === 'EXHIBITION'" @change="subType = $event"/>
                <auction-sub-type-select v-if="type === 'AUCTION'"  @change="subType = $event"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <admin-table :repo="subType === undefined?repo():subTypeRepo()" :key="type+i+subType" @update="i++" :type="type"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import AdminTable from "../../components/Editor/AdminTable";
    import TypeAndPubRepo from "../../client/TypeAndPubRepo";
    import TypeSelect from "../../components/Editor/TypeSelect";
    import IndividualRepo from "../../client/IndividualRepo";
    import ArtifactSubTypeSelect from "../../components/Editor/ArtifactSubTypeSelect";
    import AuctionSubTypeSelect from "../../components/Editor/AuctionSubTypeSelect";
    import TypeAndSubTypeManagementRepo from "../../client/TypeAndSubTypeManagementRepo";
    export default {
        name: "ArticleManagement",
        components: {AuctionSubTypeSelect, ArtifactSubTypeSelect, TypeSelect, AdminTable},
        data:()=>({
            type:'NEWS',
            subType:undefined,
            i:0
        }),
        methods:{
            repo(){
                if(this.$store.state.userObj.type === 'ADMIN'){
                    return{ fetch: TypeAndPubRepo(this.type,undefined)}
                }else {
                    return{ fetch: IndividualRepo(this.type)}
                }
            },
            subTypeRepo(){
                return {fetch: TypeAndSubTypeManagementRepo(this.type,this.subType,this.$store.state.userObj.type === 'ADMIN')}
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
