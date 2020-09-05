<template>
    <v-btn class="ma-2" @click="$emit('click')" tile outlined color="success">
        <v-icon left>mdi-pencil</v-icon> 编辑仓储数据
    </v-btn>
</template>

<script>

    export default {
        name: "WareHouseInfoBtn",
        props:{
            id: Number,
            published: Boolean
        },
        data:()=>({
        }),
        methods:{
        }
    }
</script>

<style scoped>

</style>
