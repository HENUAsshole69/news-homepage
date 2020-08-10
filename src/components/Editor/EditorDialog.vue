<template>
<div>
    <v-dialog v-model="first" persistent max-width="600px" @close="$router.go(-1)">
        <v-card>
            <v-card-title>
                <span class="headline">新</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="title" label="标题" :rules="nonEmptyRules" hide-details="auto"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <type-select @change="type = $event"/>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="$router.go(-1)">Close</v-btn>
                <v-btn color="blue darken-1" text @click="toEdit">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="second" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card>
            <v-toolbar dark color="primary">
                <v-btn icon dark @click="$router.go(-1)">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Settings</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark text @click="submit">Save</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-list three-line subheader v-if="!loading">
                <v-list-item>
                    <v-list-item-content>
                        <div ref="editor"></div>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
                <div class="center" v-else>
                    <v-progress-circular
                            :size="50"
                            color="primary"
                            indeterminate
                            class="center"
                    ></v-progress-circular>
                </div>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
    import TypeSelect from "./TypeSelect";
    import {ArticleClient} from "../../client/ArticleClient";
    import Quill from "quill";

    export default {
        name: "EditorDialog",
        components: {TypeSelect },
    data:()=>({
        content:undefined,
        valid:false,
        nonEmptyRules:[
            value => !!value || '不得为空',
        ],
        first:true,
        second:false,
        title:'',
        type:null,
        quill:null,
        loading:false
    }),
        methods:{
            toEdit(){
                this.first = false
                this.second = true
            },
            async submit(){
                this.loading = true
                const res = await ArticleClient.postEntry(JSON.stringify(this.quill.getContents()),this.title,this.type)
                await this.$router.go(-1)
                console.log(res)
            }
        },
        updated() {
            this.quill = new Quill(this.$refs['editor'],{
                theme: 'snow',
                modules: {
                    'toolbar': [
                        [{ 'font': ['sofia', 'slabo', 'roboto', 'inconsolata', 'ubuntu'] }, { 'size': [] }],
                        [ 'bold', 'italic', 'underline', 'strike' ],
                        [{ 'color': [] }, { 'background': [] }],
                        [{ 'script': 'super' }, { 'script': 'sub' }],
                        [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block' ],
                        [{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }],
                        [ {'direction': 'rtl'}, { 'align': [] }],
                        [ 'link', 'image', 'video', 'formula' ],
                        [ 'clean' ]
                    ],
                }
            })
        }
    }
</script>

<style scoped>
    .center {
        position: absolute;
        top: 50%;
        left:50%;
        width: 100%;
        transform: translate(-50%,-50%);
    }

</style>
