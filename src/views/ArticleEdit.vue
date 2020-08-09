<template>
    <div>
        <cover-editor :id="id"/>
        <rich-text-editor v-model="content" :key="content"/>
    </div>
</template>

<script>
    import RichTextEditor from "../components/Editor/RichTextEditor";
    import {ArticleClient} from "../client/ArticleClient";
    import CoverEditor from "../components/Cover/CoverEditor";
    export default {
        name: "ArticleEdit",
        components: {CoverEditor, RichTextEditor},
        props:{
            id: String
        },
        data:()=>({
            content: undefined
        }),
        async created() {
            this.content = JSON.stringify((await ArticleClient.getArticle(this.id)).data)
        },
        watch:{
            content:function (n,o) {
                if(o !== undefined){
                    ArticleClient.updateArticle(this.content,this.id)
                }
            }
        }
    }
</script>

<style scoped>

</style>
