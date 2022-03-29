<template>
  <div class="image-cover">
    <Background />
    <div class="cover-text">
      <p ref="indexHeader" class="cover-text__header">
        <b id="withU"> With U </b>
        <b id="IU" class="accent"> IU </b>
      </p>
      <DateInfo />
      <NuxtLink :to="$urls.main">
          <p ref="goToMain" class="cover-text__link">
            Go to 
            <span class="accent"> 
              Fansite
              <img class="img-link-arrow" width="30px" height="30px" src="/img/arrow_yellow.png">
            </span>
          </p>
        </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    countDate() {
      const day = 1000 * 60 * 60 * 24
      const debut = new Date(2008, 9 - 1, 23) // 월 -1 로 작성해야 함.

      const now = new Date()
      const diffDate = now.getTime() - debut.getTime()
      return Math.ceil(diffDate / day)
    },
  },
  mounted() {
    // TODO CHECK :: Mobile splash effect
    if( this.$isMobileDevice() ) {
      setTimeout(() => {
        this.$router.push(this.$urls.main)
      }, 3000)
    } else {
      this.$refs.goToMain.classList.add('showing')
    }

    this.$refs.indexHeader.classList.add('showing')
  }
}
</script>

<style lang="scss" scope>
.image-cover {
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  width: 100%;
  max-width: 650px;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), black);
}

.cover-text {
  margin: auto;
  width: 260px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 28px;
  line-height: 70px;
  font-family: 'Roboto';
  font-style: italic;

  .accent {
    color: $IUNeon;
    fill: $IUNeon;
  }

  a {
    color: rgba(255, 255, 255, 0.8);
  }

  .img-link-arrow {
    position: relative;
    top: 5px;
    margin-left: 10px;
  }
}

.cover-text__header {
  #withU, #IU {
    display: block;
    font-size: 50px;
    line-height: 60px;
    transform: translateY(60px);
    opacity: 0;
  }

  &.showing {
    #withU, #IU {
      transform: translateY(0); 
      opacity: 1;
      transition: 1.5s;
    }

    #IU {
      transition-delay: .7s;
    }
  }
}

.cover-text__link {
  text-decoration: underline;
  cursor: pointer;
  transform: translateX(-100px);
  opacity: 0;

  &.showing {
    transform: translateX(0); 
    opacity: 1;
    transition: 1s;
    transition-delay: 1s;
  }
}

@media screen and (max-width: 768px) {
  .image-cover {
    max-width: 50%;
  }
  .cover-text__link {
    display: none;
  }
}
</style>
