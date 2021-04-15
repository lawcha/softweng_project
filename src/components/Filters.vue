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
      <v-list-item-group mandatory>
        <v-list-item v-bind:key="i.key" v-for="i in sorts" link @click="applySort(i.key)">
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
    applySort: function (sort) {
      console.log("Sorting data: " + sort)
    }
  },
  data: () => ({
    sorts: [
      {
        'key': 'alpha',
        'icon': 'mdi-sort-alphabetical-variant',
        'name': 'Sort by alphabetical',
      },
    ]
  })
}
</script>

<style scoped>

</style>
