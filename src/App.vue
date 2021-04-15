<template>
  <v-app dark>
    <filters />
    <app-bar />
    <v-main>
      <v-container fluid>
        <div id="main-content">
          Main content
        </div>
      </v-container>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar';
import Filters from "@/components/Filters";
import Footer from "@/components/Footer";

export default {
  name: 'App',

  components: {
    Filters,
    AppBar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
