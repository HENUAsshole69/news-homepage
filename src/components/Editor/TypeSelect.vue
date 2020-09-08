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
                {value:'NEWS',text: '要闻'},
                {value: 'ACTIVITY',text: '活动'},
                {value: 'POLICY',text: '政策'},
                {value: 'ANNOUNCE',text: '公告'},
                {value: 'TAX_FREE',text: '保税仓储'},
                {value: 'EXHIBITION',text: '展览展示'},
                {value: 'AUCTION',text: '拍卖'},
                {value:'EXHIBITION_INFO',text: '展讯'}
                ],
            rules:[v=>v !== undefined || '不可不选']
        }),
        created() {
            if(this.$store.state.userObj.type !== 'ADMIN'){
                const arr = this.items.filter(function (word) {
                     return word.value === 'EXHIBITION' || word.value === 'AUCTION'
                })
                this.items.length = 0
                this.items.push(...arr)
                this.val = 'EXHIBITION'
            }
        }
    }
</script>

<style scoped>

</style>
