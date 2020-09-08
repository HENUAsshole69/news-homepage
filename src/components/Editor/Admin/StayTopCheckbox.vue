<template>
    <v-simple-checkbox :value="headline" @input="change"></v-simple-checkbox>
</template>

<script>
    import {ArticleClient} from "../../../client/ArticleClient";

    export default {
        name: "StayTopCheckbox",
        props:{
            id: Number,
            published: Boolean,
            headline: Boolean
        },
        data:()=>({

        }),
        model:{
            prop:'headline',
            event:'change'
        },
        methods:{
            async change(n){
                this.$emit('change',n)
                console.log(await ArticleClient.putTop(this.id,n))
            }
        }
    }
</script>

<style scoped>

</style>
