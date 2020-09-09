<template>
    <v-simple-table dense>
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">图像</th>
                <th class="text-left">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in list" :key="item.id">
                <td><static-page-image :id="item.id"/></td>
                <td>
                    <v-btn class="ma-2" @click="del(item.id)" tile outlined color="success">
                        <v-icon left>mdi-trash-can-outline</v-icon> 删除
                    </v-btn>
                </td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <td>
                    <v-form v-model="valid">
                        <pic-input @change="picB64 = $event"/>
                    </v-form>
                </td>
                <td>
                    <v-btn class="ma-2" @click="upload" :disabled="!valid" tile outlined color="success">
                        <v-icon left>mdi-upload</v-icon> 上传
                    </v-btn>
                </td>
            </tr>
            </tfoot>
        </template>
    </v-simple-table>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from "vue-class-component";
    import EditStaticBtn from "@/components/Editor/Static/EditStaticBtn.vue";
    import StaticPublishBtn from "@/components/Editor/Static/StaticPublishBtn.vue";
    import StaticPageImage from "@/components/Editor/ImageWall/WallImage.vue";
    import {WallImageClient} from "@/client/WallImageClient";
    import {WallImage} from "@/model/WallImage";
    import PicInput from "@/components/Cover/PicInput.vue";

    @Component({
        components: {
            PicInput,
            StaticPageImage,
            StaticPublishBtn,
            EditStaticBtn
        },
        name:'WallImageTable'
    })
    export default class StaticPageTable extends Vue {
        private list: WallImage[] = []
        private picB64=''
        private valid = false
        async mounted(){
            this.list= await WallImageClient.getImageDtoList()
        }
        async del(id: number){
            await WallImageClient.delImage(id)
            this.$emit('update')
        }
        async upload(){
            console.log(await WallImageClient.postImage(this.picB64))
            this.$emit('update')
        }
    }
</script>

<style scoped>

</style>
