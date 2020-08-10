<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <div ref="editor" style="height: 100%"></div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import {ArticleClient} from "../client/ArticleClient";
    import Quill from "quill";
    export default {
        name: "ArticleEdit",
        props:{
            id: String
        },
        data:()=>({
            content: undefined
        }),
        async mounted() {
            this.quill = new Quill(this.$refs['editor'],{
                scrollingContainer:this.$refs['editor'],
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
            this.content = JSON.stringify((await ArticleClient.getArticle(this.id)).data)
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
