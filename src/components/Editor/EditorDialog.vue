<template>
<div>
    <v-dialog v-model="first" persistent max-width="600px" @close="$router.go(-1)">
        <v-card>
            <v-card-title>
                <span class="headline">新增</span>
            </v-card-title>
            <v-card-text>
                <v-form v-model="valid">
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
                    <v-row v-if="type === 'EXHIBITION'">
                        <v-col>
                            <artifact-sub-type-select @change="subType = $event"/>
                        </v-col>
                    </v-row>
                    <v-row v-if="type === 'AUCTION'">
                        <v-col>
                            <auction-sub-type-select @change="subType = $event"/>
                        </v-col>
                    </v-row>
                </v-container>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="$router.go(-1)">关闭</v-btn>
                <v-btn color="blue darken-1" text :disabled="!valid" @click="toEdit">下一步</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="second" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card>
            <v-toolbar dark color="primary">
                <v-btn icon dark @click="$router.go(-1)">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>编辑</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark text @click="submit">完成</v-btn>
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
    import ArtifactSubTypeSelect from "./ArtifactSubTypeSelect";
    import AuctionSubTypeSelect from "./AuctionSubTypeSelect";
    import  ImageResize  from 'quill-image-resize-module';
    import { ImageDrop } from 'quill-image-drop-module';
    export default {
        name: "EditorDialog",
        components: {AuctionSubTypeSelect, ArtifactSubTypeSelect, TypeSelect },
    data:()=>({
        content:undefined,
        valid:false,
        nonEmptyRules:[
            value => !!value || '不得为空',
        ],
        first:true,
        second:false,
        title:'',
        type:'NEWS',
        subType:null,
        quill:null,
        loading:false
    }),
        created() {
            if(this.$store.state.userObj.type !== 'ADMIN'){
                this.type = 'EXHIBITION'
            }
        },
        methods:{
            toEdit(){
                this.first = false
                this.second = true
            },

            async submit(){
                this.loading = true
                let res = null
                if(this.subType === null)
                    res = await ArticleClient.postEntry(JSON.stringify(this.quill.getContents()),this.title,this.type)
                else
                    res = await ArticleClient.postEntryWithSubType(JSON.stringify(this.quill.getContents()),this.title,this.type,this.subType)
                console.log(this.subType)
                await this.$router.go(-1)
            }
        },
        updated() {
            if(this.$refs['editor'] === undefined) return;
            const Font = Quill.import('formats/font');
            Font.whitelist = ['SimSun', 'SimHei','Microsoft-YaHei','KaiTi','FangSong','Arial','Times-New-Roman','sans-serif'];
            Quill.register(Font, true);
            Quill.register('modules/imageResize', ImageResize);
            Quill.register('modules/imageDrop', ImageDrop);
            this.quill = new Quill(this.$refs['editor'],{
                theme: 'snow',
                modules: {
                    imageDrop: true,
                    imageResize: {
                        modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
                    },
                    'toolbar': [
                        [{ 'font': ['SimSun', 'SimHei','Microsoft-YaHei','KaiTi','FangSong','Arial','Times-New-Roman','sans-serif'] }, { 'size': [] }],
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

<style lang="scss" scoped>

    .center {
        position: absolute;
        top: 50%;
        left:50%;
        width: 100%;
        transform: translate(-50%,-50%);
    }

</style>
