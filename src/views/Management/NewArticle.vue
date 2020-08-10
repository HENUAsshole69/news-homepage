<template>
<div>
    <editor-dialog/>
</div>
</template>

<script>
    import RichTextEditor from "../../components/Editor/RichTextEditor";
    import {ArticleClient} from "../../client/ArticleClient";
    import TypeSelect from "../../components/Editor/TypeSelect";
    import CoverEditor from "../../components/Cover/CoverEditor";
    import EditorDialog from "../../components/Editor/EditorDialog";
    export default {
        name: "NewArticle",
        components: {EditorDialog}
    }
</script>

<style scoped>

</style>
