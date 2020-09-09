<template>
    <v-select dark label="外部链接" @change="window.location = $event" :items="links"/>
</template>

<script>
    import {friendlyList} from "./FriendlyLink";

    export default {
        name: "FriendlyLinkSelect",
        data:()=>({
            friendlyList,
            window
        }),
        computed:{
            links(){
                const list = []
                // eslint-disable-next-line @typescript-eslint/no-this-alias
                const model = this
                for(const name in this.friendlyList){
                    list.push({
                        text:name,
                        value:model.friendlyList[name]
                    })
                }
                return list
            }
        }
    }
</script>

<style scoped>

</style>
