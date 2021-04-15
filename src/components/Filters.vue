<template>
  <v-navigation-drawer app :expand-on-hover="!this.$vuetify.breakpoint.xs" clipped v-model="drawer">
    <template v-slot:prepend  >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-icon >mdi-filter</v-icon>
          </v-list-item-avatar>
          <v-list-item-title class="title">Filters</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider/>
    </template>
    <v-list
      nav
      dense
    >
      <v-list-item-group>
        <v-list-item v-bind:key="i.key" v-for="i in sorts" link @click="applySort(i.func)">
          <v-list-item-icon>
            <v-icon>{{i.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{i.name}}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: 'Filters',
  computed: {
    drawer: {
      get () {
        return this.$store.state.drawerOn
      },
      set (value) {
        this.$store.commit('setDrawerOn', value)
      }
    }
  },
  methods: {
    ...mapMutations([
      'applySort'
    ])
  },
  data: () => ({
    sorts: [
      {
        'key': 'alpha',
        'icon': 'mdi-sort-alphabetical-variant',
        'name': 'Sort by alphabetical',
        'func': (a, b) => {
          if (a.name < b.name) return -1
          if (a.name > b.name) return 1
          return 0
        }
      },
      {
        'key': 'rating',
        'icon': 'mdi-star',
        'name': 'Sort by rating',
        'func': (a, b) => {
          let suma = 0
          a.comments.forEach(el => (suma += el.rating))
          let ava = suma / a.comments.length
          let sumb = 0
          b.comments.forEach(el => (sumb += el.rating))
          let avb = sumb / b.comments.length
          if (ava < avb) return 1
          if (ava > avb) return -1
          return 0
        }
      }
    ]
  })
}
</script>

<style scoped>

</style>
