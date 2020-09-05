<template>
    <v-dialog v-model="dialog" persistent max-width="600px" @close="$emit('close',false)" @click:outside="$emit('close',false)">
        <v-card>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-text-field :rules="nonEmptyRules" label="编号" v-model="registry"/>
                        </v-col>
                        <v-col>
                            <v-text-field :rules="nonEmptyRules" label="类型" v-model="wareHouseType"/>
                        </v-col>
                        <v-col>
                            <v-text-field :rules="nonEmptyRules" label="估值" v-model="value"/>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="save">保存</v-btn>
                <v-btn color="blue darken-1" text @click="$emit('close')">关闭</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import {ArticleClient} from "../client/ArticleClient";

    export default {
        name: "WareHouseInfoDialog",
        components: {},
        props:{
            id: String,
            dialog:Boolean
        },
        data:()=>({
            nonEmptyRules:[
                value => !!value || '不得为空',
            ],
            value:undefined,
            wareHouseType:undefined,
            registry:undefined,
            obj:{}
        }),
        model:{
            prop:'dialog',
            event:'close'
        },
        async mounted() {
            this.obj = await ArticleClient.getArticleDto(this.id)
            this.value = this.obj.value
            this.wareHouseType = this.obj.wareHouseType
            this.registry = this.obj.registry
        },
        methods:{
            async save(){
                await ArticleClient.putArticleProperties(this.id,this.registry,this.wareHouseType,this.value)
                this.$emit('close',false)
            }
        }
    }
</script>

<style scoped>

</style>
