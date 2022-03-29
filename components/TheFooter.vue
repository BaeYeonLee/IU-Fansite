<template>
  <footer ref="footer">
    © 2021. HLS all rights reserved.
  </footer>
</template>

<script>
export default {
  computed: {
    isMobile() {
      return this.$isMobileDevice()
    }
  },
  mounted() {
    if( this.$isMobileDevice() ) {
      this.$refs.footer.classList.add('mobile')
    }
  },
}
</script>

<style lang="scss">
footer {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  background: $IU-Black;
  color: $IU-White;

  &.mobile {
    height: 60px;
  }
}
</style>
