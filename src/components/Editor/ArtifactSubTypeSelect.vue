<template>
    <v-select
            v-model="val"
            :items="items"
            label="文物类型"
            :rules="rules"
            @change="$emit('change',$event)"
    ></v-select>
</template>

<script>
    export default {
        name: "ArtifactSubTypeSelect",
        data:()=>({
            val:'PAINTING',
            items:[
                {value:'PAINTING',text: '书画'},
                {value: 'PORCELAIN',text: '瓷器'},
                {value: 'MISC',text: '其他'}
            ],
            rules:[v=>v !== undefined || '不可不选']
        }),
        mounted() {
            this.$emit('change','PAINTING')
        }
    }
</script>

<style scoped>

</style>
