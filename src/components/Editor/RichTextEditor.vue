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
        data:()=>({
            quill:null
        }),
        mounted() {
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
        },
        methods:{
            save:async function () {
                const res = await ArticleClient.postAntique(JSON.stringify(this.quill.getContents()),'assd')
                console.log(res)
            }
        }
    }
</script>

<style scoped>
@import "~quill/dist/quill.snow.css";
</style>
