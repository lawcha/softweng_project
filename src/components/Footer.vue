<template>
  <v-footer>
    <img id="footerImg" src='../assets/logo.png' alt="Logo"/>

    <v-card-text class="text-center">
      <b>Beer.io</b> is the reference to search for good beers to drink. It is community-based, so feel free to leave a comment about how you've experienced a beer. Enjoy !
    </v-card-text>

    <v-card-text class="text-center">
      Beer.io ©{{ new Date().getFullYear() }} — <strong>Laurent Chassot</strong>
    </v-card-text>
  </v-footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  #footerImg {
    filter: invert();
    opacity: 0.3;
    height: 90px;
    margin:auto;
  }
</style>
