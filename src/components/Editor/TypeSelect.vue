<template>
    <v-select
            v-model="val"
            :items="items"
            label="类型"
            :rules="rules"
            @change="$emit('change',$event)"
    ></v-select>
</template>

<script>
    export default {
        name: "TypeSelect",
        data:()=>({
            val:'NEWS',
            items:[
                {value:'NEWS',text: '新闻'},
                {value: 'ACTIVITY',text: '活动'},
                {value: 'POLICY',text: '政策'},
                {value: 'ANNOUNCE',text: '公告'},
                {value: 'TAX_FREE',text: '免税'},
                {value: 'EXHIBITION',text: '展览'},
                {value: 'AUCTION',text: '拍卖'}
                ],
            rules:[v=>v !== undefined || '不可不选']
        })
    }
</script>

<style scoped>

</style>
