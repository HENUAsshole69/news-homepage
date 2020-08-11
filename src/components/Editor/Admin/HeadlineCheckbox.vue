<template>
    <v-simple-checkbox v-model="value"></v-simple-checkbox>
</template>

<script>
    import {ArticleClient} from "../../../client/ArticleClient";

    export default {
        name: "HeadlineCheckbox",
        props:{
            id: Number,
            published: Boolean,
            headline: Boolean
        },
        data:()=>({
            value:null
        }),
        mounted() {
            this.value = this.headline
        },
        model:{
            prop:'headline',
            event:'change'
        },watch:{
            async value(n){
                this.$emit('change',n)
                if(n){
                    console.log(await ArticleClient.postHeadline(this.id))
                }else{
                    console.log(await ArticleClient.delHeadline(this.id))
                }
            }
        }
    }
</script>

<style scoped>

</style>
