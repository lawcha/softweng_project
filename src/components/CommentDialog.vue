<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary lighten-1"
        dark
        v-bind="attrs"
        v-on="on">
        Comments
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        Comments
      </v-card-title>

      <v-list class="list">
        <div v-bind:key="i" v-for="(c, i) in comments" class="py-1">
          <v-list-item class="d-flex flex-wrap justify-space-between">
            <v-avatar color="#ddd" class="mr-2">
              {{getLetter(c.author)}}
            </v-avatar>
            <div class="flex-grow-1">
              <p class="date">{{c.date}}</p>
              <h4>{{c.author}}</h4>
              <p>{{c.content}}</p>
              <v-rating :value="c.rating" readonly/>
            </div>
          </v-list-item>

          <v-divider/>
        </div>
      </v-list>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="dialog = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  props: [ 'comments' ],
  name: 'CommentDialog',
  data () {
    return {
      dialog: false,
      myComments: this.comments
    }
  },
  created() {
    this.comments.sort(
        function (a, b) {
          a = new Date(a.date)
          b = new Date(b.date)
          return a > b ? -1 : a < b ? 1 : 0
        }
    )
  },
  methods: {
    getLetter: function (word) {
      return word.charAt(0).toUpperCase()
    }
  }
}
</script>

<style scoped>
  .list {
    overflow-y: scroll;
    max-height: 400px;
  }
  .date {
    font-size: 10pt;
    color: grey;
    float: right;
  }
</style>
