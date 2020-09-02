<template>
    <div>
        <v-toolbar dark color="primary">
            <v-btn icon  :disabled="loading"  dark @click="$router.go(-1)">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>{{article === null ? '':article.title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn dark :disabled="loading" text @click="save">保存</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-container v-show="!loading">
            <v-row>
                <v-col>
                    <div ref="editor" style="height: 100%"></div>
                </v-col>
            </v-row>
        </v-container>
        <div class="center" v-if="loading">
            <v-progress-circular
                    :size="50"
                    color="primary"
                    indeterminate
                    class="center"
            ></v-progress-circular>
        </div>
    </div>
</template>

<script>
    import {ArticleClient} from "../client/ArticleClient";
    import Quill from "quill";
    import {StaticPageClient} from "../client/StaticPageClient";
    import  ImageResize  from 'quill-image-resize-module';
    import { ImageDrop } from 'quill-image-drop-module';
    export default {
        name: "StaticEdit",
        props:{
            id: String
        },
        data:()=>({
            content: undefined,
            article:null,
            loading: false
        }),
        async mounted() {
            if(this.$refs['editor'] === undefined) return;
            const Font = Quill.import('formats/font');
            Font.whitelist = ['SimSun', 'SimHei','Microsoft-YaHei','KaiTi','FangSong','Arial','Times-New-Roman','sans-serif'];
            Quill.register(Font, true);
            Quill.register('modules/imageResize', ImageResize);
            Quill.register('modules/imageDrop', ImageDrop);
            this.quill = new Quill(this.$refs['editor'],{
                scrollingContainer:this.$refs['editor'],
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
            this.loading= true;
            this.content = JSON.stringify((await StaticPageClient.getStaticPage(this.id)).data)
            this.quill.setContents(JSON.parse(this.content))
            this.article = await StaticPageClient.getStaticPageDto(this.id)
            this.loading = false
        },
        methods:{
            save:async function () {
                this.loading = true
                await StaticPageClient.updateEntry(JSON.stringify(this.quill.getContents()),this.id)
                this.loading = false
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    @import "~quill/dist/quill.snow.css";
    .center {
        position: absolute;
        top: 50%;
        left:50%;
        width: 100%;
        transform: translate(-50%,-50%);
    }
</style>
