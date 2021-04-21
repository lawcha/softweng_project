<template>
  <v-card class="">
    <v-img>
      <div class="drink-image" :style="'background: url(' + drink.imageUrl + ') no-repeat center'" alt="Beer image" />
    </v-img>

    <v-card-title>{{drink.name}}</v-card-title>
    <v-card-subtitle>{{this.camelize(drink.type)}}</v-card-subtitle>

    <v-card-actions>
      <div>
        <v-rating color="#FFD700" :value="rating" readonly />
        <comment-dialog :comments="drink.comments"/>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider/>
        <v-card-text>
          {{drink.description}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>

import CommentDialog from "@/components/CommentDialog";
export default {
  components: {CommentDialog},
  props: [ 'drink' ],
  name: 'Drink',
  methods: {
    openDialog(id) {
      console.log("Comments of drink:" + id)
    },
    camelize (str) {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase()
      }).replace(/\s+/g, '')
    }
  },
  computed: {
    rating () {
      if (this.drink.comments.length === 0) return 0
      let sum = 0
      this.drink.comments.forEach(el => (sum += el.rating))
      return sum / this.drink.comments.length
    }
  },
  data: () => ({
    show: false
  })
}
</script>

<style scoped>
  md-card-media {
    height: 300px !important;
    overflow: hidden !important;
  }
  .drink-image {
    height: 300px !important;
    background-size: cover;
  }
</style>
