<template>
    <v-dialog v-model="dialog" persistent max-width="600px" @close="$emit('close')">
        <v-card>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col>
                           <cover-editor v-bind:id="id"/>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="$emit('close')">关闭</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import CoverEditor from "./CoverEditor";
    export default {
        name: "CoverEditorDialog",
        components: {CoverEditor},
        props:{
            id: String,
            dialog:Boolean
        }
    }
</script>

<style scoped>

</style>
