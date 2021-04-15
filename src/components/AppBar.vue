<template>
  <v-app-bar app
    color="primary"
    dense
    dark
    clipped-left
    hide-on-scroll
    prominent
  >
  <v-app-bar-nav-icon style="position: absolute" @click.stop="drawer = !drawer" v-if="this.$vuetify.breakpoint.xs">
    <v-icon>mdi-filter</v-icon>
  </v-app-bar-nav-icon>

    <v-toolbar-title style="width: 100%"><img src="../assets/logo.png" style="height:90px; margin:auto; display:block;"  alt="Beer.io"/></v-toolbar-title>
    <v-spacer/>
    <template slot="extension">
      <categories />
    </template>
</v-app-bar>

</template>

<script>
import Categories from './Categories'
export default {
  name: 'AppBar',
  components: {
    'categories': Categories
  },
  computed: {
    drawer: {
      get () {
        return this.$store.state.drawerOn
      },
      set (value) {
        this.$store.commit('setDrawerOn', value)
      }
    },
  }
}
</script>

<style scoped>
  .v-application--is-ltr .v-toolbar__content > .v-btn.v-btn--icon:first-child + .v-toolbar__title {
    padding: 0 !important;
  }
</style>
