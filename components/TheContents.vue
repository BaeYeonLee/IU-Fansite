<template>
  <div ref="mainPanel" class="main-panel">
    <div class="content-header">
      <b v-if="isNotMainPage" class="content-title">{{ getTitle }}</b>
    </div>
    <Nuxt class="contents-body"/>
  </div>
</template>

// TODO :: CREATE MAIN PAGE
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getTitle: 'title/getTitle'
    }),
    isNotMainPage() {
      return this.$route.path !== this.$urls.main
    },
  },
  mounted() {
    console.log('isNotMainPage', this.isNotMainPage)
    if( this.$isMobileDevice() ) {
      this.$refs.mainPanel.classList.add('mobile')
    }
  }
}
</script>

<style lang="scss" scoped>
.main-panel {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.content-header {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: calc(100vh - 100px);
  background-color: $IU-Black-A20;
  padding-top: 80px;

  .mobile & {
      padding-top: 60px;
  }

  // TODO CHECK MOBILE POSITION
  .content-title {
    position: absolute;
    top: 50%;
    left: 60%;
    font-family: Roboto;
    font-size: 70px;
    font-weight: bold;
    font-style: italic;
    color: $IU-Title-Violte;
  }
}

.contents-body {
  min-height: calc(100vh - 80px);
  background-color: $IU-Black;


  .mobile & {
    min-height: calc(100vh - 60px);
  }
}
</style>