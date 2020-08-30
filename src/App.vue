<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AxiosInstance from "./client/AxiosInstance";

export default Vue.extend({
  name: 'App',

  components: {
  },
  async mounted() {
    if (localStorage.getItem('token') !== null) {
      AxiosInstance.defaults.headers.common['x-api-key'] = localStorage.getItem('token')
      this.$store.commit('login', localStorage.getItem('token'))
      await this.$store.dispatch("getUserObj")
    }
  },
  data: () => ({
    //
  }),
});
</script>

<style lang="scss">
  @import "fonts";
</style>
