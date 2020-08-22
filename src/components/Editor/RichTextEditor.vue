<template>
<v-container>
    <v-row>
        <v-col>
            <div ref="editor"></div>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-btn @click="save"/>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
    import Quill from 'quill'
    import {ArticleClient} from "../../client/ArticleClient";
    export default {
        name: "RichTextEditor",
        props:{
            content:{
                type: String,
                default:undefined
            }
        },
        data:()=>({
            quill:null
        }),
        model:{
            prop:'content',
            event:'update'
        },
        mounted() {
            const Font = Quill.import('formats/font');
            Font.whitelist = ['SimSun', 'SimHei','Microsoft-YaHei','KaiTi','FangSong','Arial','Times-New-Roman','sans-serif'];
            Quill.register(Font, true);
            this.quill = new Quill(this.$refs['editor'],{
                theme: 'snow',
                modules: {
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
            if(this.content !== undefined)
                this.quill.setContents(JSON.parse(this.content))
        },
        methods:{
            save:async function () {
                this.$emit('update',JSON.stringify(this.quill.getContents()))
            }
        }
    }
</script>

<style scoped>
@import "~quill/dist/quill.snow.css";
</style>
