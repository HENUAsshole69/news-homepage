<template>
    <Frame>
        <v-container>
            <v-row class="d-flex justify-center" no-gutters dense>
                <v-col  md="10" lg="8" sm="11" class="flex-grow-0">
                    <v-card flat tile>
                        <v-progress-linear
                                v-show="loading"
                                indeterminate
                                color="cyan"
                        ></v-progress-linear>
                        <v-container fluid  style="padding: 0;margin: 0">
                            <v-row no-gutters dense class="d-flex align-center">
                                    <v-card-text class="text-center">
                                        {{obj.title}}
                                    </v-card-text>
                            </v-row>
                            <v-row no-gutters dense class="d-flex justify-center">
                                <v-col class="flex-grow-0">
                                <info-cover-viewer v-bind:id="obj.id" />
                                </v-col>
                            </v-row>
                            <v-row no-gutters dense class="d-flex justify-center">
                                <v-col>
                                    <v-row no-gutters dense>
                                        <v-col>
                                            <template v-if="obj !== null">

                                            </template>
                                            <div ref="editor" style="height: 100%" :key="content"></div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

    </Frame>
</template>

<script>
    import {ArticleClient} from "../../client/ArticleClient";
    import Quill from "quill";
    import InfoCoverViewer from "./InfoCoverViewer";
    import Frame from "../Frame";
    export default {
        name: "InfoDetail",
        components: {Frame, InfoCoverViewer},
        props:{
            id: String
        },
        data:()=>({
            content: undefined,
            obj:null,
            loading:false
        }),
        async mounted() {
            console.log(this.id)
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

