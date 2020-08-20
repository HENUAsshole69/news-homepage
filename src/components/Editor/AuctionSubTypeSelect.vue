<template>
    <v-select
            v-model="val"
            :items="items"
            label="拍卖类型"
            :rules="rules"
            @change="$emit('change',$event)"
    ></v-select>
</template>

<script>
    export default {
        name: "AuctionSubTypeSelect",
        data:()=>({
            val:'SPRING_AUTUMN',
            items:[
                {value:'SPRING_AUTUMN',text: '春秋'},
                {value: 'WANG_SU',text: '望塑'},
                {value: 'ONLINE_AUCTION',text: '网拍'}
            ],
            rules:[v=>v !== undefined || '不可不选']
        }),
        mounted() {
            this.$emit('change','SPRING_AUTUMN')
        }
    }
</script>

<style scoped>

</style>
