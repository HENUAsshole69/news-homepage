<template>
    <v-container>
        <v-form v-model="valid">
        <v-row>
            <v-col>
                <v-card
                        class="mx-auto"
                        max-width="344"
                        height="300"
                >
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-text-field label="标题" :rules="nonEmptyRules" hide-details="auto"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <type-select />
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <cover-editor/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <rich-text-editor v-model="content"/>
            </v-col>
        </v-row>
        </v-form>
    </v-container>

</template>

<script>
    import RichTextEditor from "../components/Editor/RichTextEditor";
    import {ArticleClient} from "../client/ArticleClient";
    import TypeSelect from "../components/Editor/TypeSelect";
    import CoverEditor from "../components/Cover/CoverEditor";
    export default {
        name: "NewArticle",
        components: {CoverEditor, TypeSelect, RichTextEditor},
        data:()=>({
            content:undefined,
            valid:false,
            nonEmptyRules:[
        value => !!value || '不得为空',
    ]
        }),
        watch:{
            content:async function (n) {
                await ArticleClient.postEntry(this.content,"sadsad","NEWS")
                this.$router.go(0)
            }
        }
    }
</script>

<style scoped>

</style>
