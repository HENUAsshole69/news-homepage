<template>
    <div>
        <Frame>
            <v-container>
                <v-row  class="d-flex justify-center">
                    <v-col md="10" lg="8" sm="11">
                        <v-card>
                            <v-card-title class="headline">{{obj !== null?obj.title:''}}</v-card-title>
                            <v-divider/>
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
            obj:null
        }),
        async mounted() {

            this.content = JSON.stringify((await ArticleClient.getArticle(this.id)).data)
            this.obj = await ArticleClient.getArticleDto(this.id)

        },
        updated() {
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
