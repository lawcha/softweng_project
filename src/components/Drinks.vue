<template>
  <v-container>
    <v-row>
      <v-col md="4" v-bind:key="drink.name" v-for="drink in $store.state.drinks">
        <drink :drink="drink" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Drink from './Drink'
import { mapActions } from 'vuex'

export default {
  name: 'Drinks',
  components: { Drink },
  created () {
    this.loadDrinks()
  },
  data: () => ({
    bootstrapPaginationClasses: {
      ul: 'pagination',
      li: 'page-item',
      liActive: 'active',
      liDisable: 'disabled',
      button: 'page-link'
    }
  }),
  methods: {
    ...mapActions([
      'loadDrinks'
    ])
  }
}
</script>

<style>
</style>
