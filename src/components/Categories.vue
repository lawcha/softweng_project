<template>
  <v-tabs>
    <v-tab id="tab-all" v-on:click="filterType('')">All</v-tab>
    <v-tab :key="'tab-' + cat.type" v-on:click="filterType(cat.type)" v-for="cat of categories">{{cat.value}}</v-tab>
  </v-tabs>
</template>

<script>

import {mapMutations} from "vuex";

export default {
  name: 'Categories',
  data: () => ({
    categories: [
      {
        type: 'blond',
        value: 'Blond'
      },
      {
        type: 'white',
        value: 'White'
      },
      {
        type: 'dark',
        value: 'Dark'
      },
    ]
  }),
  methods: {
    ...mapMutations([
      'filterType'
    ])
  }
}
</script>

<style scoped>

</style>
