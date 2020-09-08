<template>
    <v-simple-table dense>
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">标题</th>
                <th class="text-left">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in pagesList" :key="item.id">
                <td>{{ item.title }}</td>
                <td>
                    <edit-static-btn :id="item.id"/>
                    <static-publish-btn v-if="$store.state.userObj.type === 'AUTH'" v-bind="item"/>
                </td>
            </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from "vue-class-component";
    import {StaticPageClient} from "@/client/StaticPageClient";
    import {StaticPage} from "@/model/StaticPage";
    import EditStaticBtn from "@/components/Editor/Static/EditStaticBtn.vue";
    import StaticPublishBtn from "@/components/Editor/Static/StaticPublishBtn.vue";

    @Component({
        components: {
            StaticPublishBtn,
            EditStaticBtn
        },
        name:'StaticPageTable'
    })
    export default class StaticPageTable extends Vue {
        private pagesList: StaticPage[] = []
        async mounted(){
            this.pagesList = await StaticPageClient.getStaticPageDtoList()
        }
    }
</script>

<style scoped>

</style>
