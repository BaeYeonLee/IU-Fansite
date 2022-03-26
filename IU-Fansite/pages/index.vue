<template>
  <div class="intro-page">
    <div class="intro-cover">
      <div class="intro-text">
        <p ref="introHeader" class="intro-text__header">
          <b id="withU"> With U, </b>
          <b id="IU" class="accent"> IU </b>
        </p>
        <b class="intro-text__days">
          <br />
          B-day | 1993. 05. 16 <br />
          Debut | 2008. 09. 23 <br />
          With | {{ countDate }} Days <br />
          <router-link to="/main">
            <p ref="goToMain" class="intro-text__link">
              Go to 
              <span class="accent"> 
                Fansite
                <img class="img-link-arrow" width="30px" height="30px" src="/img/arrow_yellow.png">
              </span>
            </p>
          </router-link>
        </b>
      </div>
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
    this.$refs.introHeader.classList.add('showing')
    this.$refs.goToMain.classList.add('showing')
  }
}
</script>
<style lang="scss">
.intro-page {
  width: 100%;
  height: 100vh;
  background-image: url('/img/iu_1920.jpg');
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
}

.intro-cover {
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  width: 100%;
  max-width: 650px;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), black);
}

.intro-text {
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 260px;
  // margin: auto;
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

.intro-text__header {
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
      transition: 1s;
    }

    #IU {
      transition-delay: .5s;
    }
  }
}

.intro-text__link {
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
  .intro-page {
    background-position: top left -150px;
  }

  .intro-cover {
    max-width: 50%;
  }
  .intro-text__days {
    display: none;
  }
}
</style>
