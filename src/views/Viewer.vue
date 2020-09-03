<template>
    <div>
        <Frame>
            <v-container>
                <v-row  class="d-flex justify-center">
                    <v-col md="10" lg="8" sm="11">
                        <v-card>
                            <v-progress-linear
                                    v-show="loading"
                                    indeterminate
                                    color="cyan"
                            ></v-progress-linear>
                            <v-card-title class="headline text-center">{{obj !== null?obj.title:''}}</v-card-title>
                            <v-divider  v-show="!loading"/>

                            <v-container style="background-color: white">
                                <v-row>
                                    <v-col>
                                        <div ref="editor" style="height: 100%" :key="content"></div>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </Frame>
    </div>
</template>

<script>
    import {ArticleClient} from "../client/ArticleClient";
    import Quill from "quill";
    import Frame from "./Frame";
    export default {
        name: "Viewer",
        components: {Frame},
        props:{
            id: String
        },
        data:()=>({
            content: undefined,
            obj:null,
            loading:false
        }),
        async mounted() {
            this.loading = true
            this.content = JSON.stringify((await ArticleClient.getArticle(this.id)).data)
            this.obj = await ArticleClient.getArticleDto(this.id)
            this.loading = false
        },
        updated() {
            const Font = Quill.import('formats/font');
            Font.whitelist = ['SimSun', 'SimHei','Microsoft-YaHei','KaiTi','FangSong','Arial','Times-New-Roman','sans-serif'];
            Quill.register(Font, true);
            this.quill = new Quill(this.$refs['editor'], {
                scrollingContainer: this.$refs['editor'],
                theme: 'bubble',
                modules: {
                    "toolbar": false
                },
                readOnly: true
            })
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
    @import "~quill/dist/quill.bubble.css";
</style>
