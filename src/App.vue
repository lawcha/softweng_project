<template>
  <v-app dark>
    <filters />
    <app-bar />
    <v-main>
      <v-container fluid>
        <div id="main-content">
          <drinks />
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
import Drinks from "@/components/Drinks";

export default {
  name: 'App',

  components: {
    Drinks,
    Filters,
    AppBar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
