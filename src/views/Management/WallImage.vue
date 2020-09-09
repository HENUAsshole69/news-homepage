<template>
    <wall-image-table :key="key" @update="key++"/>
</template>

<script>
    import WallImageTable from "../../components/Editor/ImageWall/WallImageTable";
    export default {
        name: "WallImage",
        components: {WallImageTable},
        data:()=>({
            key:0
        })
    }
</script>

<style scoped>

</style>
