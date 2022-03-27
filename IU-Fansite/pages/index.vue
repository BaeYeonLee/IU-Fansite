<template>
  <div class="ls">
    <template v-if="isNotIndexPage">
      <TheHeader/>
      <TheFooter/>
    </template>
    <IndexCover v-if="!isNotIndexPage"/>
  </div>
</template>

// TODO :: ADD CONTENTS COMPONENT
<script>
export default {
  name: 'IndexPage',
  computed: {
    isNotIndexPage() {
      return this.$route.path !== '/'
    }
  },
}
</script>
<style lang="scss" scope>
.image-cover {
  &.hide {
    display: none;
  }
}

header {
  &.active {
    display: block;
  }
}
</style>
