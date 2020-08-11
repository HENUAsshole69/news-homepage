<template>
    <v-card tile>
    <jpa-data-iterator :repo="repo">
        <template v-slot:default="{items}">
            <v-container>
                <v-row>
                    <v-col :key="item.id" v-for="item in items">
                        <item-card v-bind="item"/>
                    </v-col>
                </v-row>
            </v-container>
        </template>
    </jpa-data-iterator>
    </v-card>
</template>

<script>
    import JpaDataIterator from "@lu1kaifeng/jpa-data-table/src/components/JpaDataIterator";
    import ItemCard from "@/components/ExhibitionSection/ItemCard";
    export default {
        name: "ItemTray",
        components:{JpaDataIterator,ItemCard},
        props:{
            repo: Object
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
