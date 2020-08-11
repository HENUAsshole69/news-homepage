<template>
    <div>
        <v-app-bar
                color="white"
                dense
                flat
        >
            <v-btn icon @click="$router.go(-1)">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>

            <v-toolbar-title>{{obj.title}}</v-toolbar-title>

            <v-spacer></v-spacer>

        </v-app-bar>
        <v-divider/>
        <v-container>
            <v-row>
                <v-col>
                    <div ref="editor" style="height: 100%" :key="content"></div>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
    import {ArticleClient} from "../client/ArticleClient";
    import Quill from "quill";
    export default {
        name: "Viewer",
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
