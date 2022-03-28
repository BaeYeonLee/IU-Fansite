<template>
  <div ref="mainPanel" class="main-panel">
    <div class="content-header">
      
    </div>
    <Nuxt class="contents-body"/>
  </div>
</template>

// TODO :: CREATE MAIN PAGE
<script>
export default {
  computed: {
    isMainPage() {
      return this.$route.path === this.$urls.main
    },
  },
  mounted() {
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
}

.contents-body {
  min-height: calc(100vh - 80px);
  background-color: $IU-Black;


  .mobile & {
    min-height: calc(100vh - 60px);
  }
}
</style>