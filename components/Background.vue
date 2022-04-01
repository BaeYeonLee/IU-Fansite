<template>
  <div class="background">
    <b v-if="isMainPage" class="main-title"> With U, <span class="accent"> IU </span> </b>
  </div>
</template>

<script>
export default {
  // TODO :: Main title size for each device
  computed: {
    isMainPage() {
      return this.$route.path === this.$urls.main
          || this.$route.path === this.$urls.mobile.main
    },
  },
}
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-image: url('/img/iu_1920.jpg');
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
}

.main-title {
    position: relative;
    top: 45%;
    left: 55%;
    color: $IU-Title-Black;
    font-family: Roboto;
    font-size: 70px;
    font-weight: bold;
    font-style: italic;
    z-index: 500;

    .accent {
      width: 100%;
      height: 600px;
      color: $IU-Neon-A90;
    }
  }

@media screen and (max-width: 1440px) {
  .main-title {
    left: 60%;
  }
}

@media screen and (max-width: 999px) {
  .main-title {
    display: none;
  }
}

// MOBILE
@media screen and (max-width: 768px) {
  .background {
    background-position: top left -150px;
  }
}
</style>