<template>
  <div class="wrapper" :class="{'mobile': $device.isMobile}">
    <Background />
    <TheHeader/>
    <TheContents />
    <TheFooter/>
  </div>
</template>

<script>
export default {

}
</script>

<style scope>
.wrapper {
  position: relative;
  height: 100vh;
}
</style>
