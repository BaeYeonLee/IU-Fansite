<template>
  <header ref="header">
    <div class="header-contents">
      <NuxtLink to="/main" class="header-title">
        WITH U, <span class="accent"> IU </span>
      </NuxtLink>
      <ul class="header-menu">
        <NuxtLink
          v-for="(menu, index) in menuList"
          :key="menu"
          :class="['menu-item', `item-${index}`, { selected: isSelected(menu) }]"
          :to="`/${menu.toLowerCase()}`"
          >
          {{ menu }}
        </NuxtLink>
      </ul>
      <!-- Mobile Menu -->
      <a ref="headerMobile" class="header-mobile" :class="{'clicked': isMobileClick}" @click="onClickMobile">
        <span class="mobile-button item-1" />
        <span class="mobile-button item-2" />
        <span class="mobile-button item-3" />
      </a>
    </div>
    <ul v-if="isMobileClick" class="mobile-menu">
        <NuxtLink
          v-for="(menu, index) in menuList"
          :key="menu"
          :class="['menu-item', `item-${index}`, { selected: isSelected(menu) }]"
          :to="`/${menu.toLowerCase()}`"
          >
          {{ menu }}
        </NuxtLink>
      </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMobileClick: false,
      menuList: ['Album', 'Filmography', 'AD', 'History', 'Board'],
    }
  },
  computed: {
    isMainPage() {
      return this.$route.path === '/main'
    },
    isMobile() {
      return this.$isMobileDevice()
    }
  },
  mounted() {
    const headerClass = this.isMainPage ? 'main-page' : 'menu'
    this.$refs.header.classList.add(headerClass)

    if( this.$isMobileDevice() ) {
      this.$refs.header.classList.add('mobile')
    }
  },
  methods: {
    isSelected(item) {
      return this.$route.path.includes(item.toLowerCase())
    },
    onClickMobile() {
      this.isMobileClick = !this.isMobileClick
    }
  },
}
</script>

<style lang="scss" scope>
$IU-Header-Pink: rgba(242, 226, 220, 0.9);
$IU-Header-Black: rgba(13, 13, 13, 0.75);

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 9999;

  .header-contents {
    max-width: 1080px;
    height: 80px;
    margin: 0 auto;
    line-height: 80px;
    color: $IU-LightViolet;
    font-size: 24px;

    .header-title {
      display: none;
      color: $IU-Header-Black;
      font-size: 36px;
      font-family: 'Roboto';
      font-weight: bold;
      font-style: italic;

      .accent {
        color: $IU-Neon-A90;
      }
    }

    .header-menu {
      display: flex;
      float: right;
      width: 700px;
      height: 50px;
      margin: 15px;

      .menu-item {
        flex: 1;
        line-height: 40px;
        margin: 5px 10px;
        color: $IU-LightViolet;
        text-align: center;
        transform: translateY(-40px);
        opacity: 0;
        
        &.selected {
          color: $IU-DeepViolet;
        }

        // @for $i from 0 to 5 {
        //   &.item-#{$i} {
        //     @if $i % 2 == 0 {
        //       transform: translateY(-40px);
        //     } @else {
        //       transform: translateY(40px);
        //     }
        //   }
        // }
      }
    }
  } // END .header-contents

  &.menu {
    background-color: white;

    .header-contents .header-title {
      display: inline-block;
    }
  }

  &.main-page {
    background-color: $IU-Transparent;

    .header-contents .menu-item {
      color: $IU-Header-Pink;
      transform: translateY(0);
      opacity: 1;
      transition: .5s;

      @for $i from 0 to 5 {
        &.item-#{$i} {
          // transform: translateY(0);
          transition-delay: $i * 0.5s;
        }
      }
    }
  }

  &.mobile {
    height: 60px;

    .header-contents {
      height: 60px;
    }

    .header-title, .header-menu {
      display: none;
    }

    .header-mobile {
      float: right;
      width: 60px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .mobile-button {
        width: 35px;
        height: 5px;
        border-radius: 10px;
        background: $IU-Header-Pink;
        transform: translateX(20px);
        opacity: 0;

        + .mobile-button {
          margin-top: 5px;
        }

        @for $i from 1 to 4 {
          &.item-#{$i} {
            transition: .5s;
          }
        }
      }

      &.clicked {
        .mobile-button {
          z-index: 10000;
          @for $i from 1 to 4 {
            &.item-#{$i} {
              @if $i == 1 {
                transform: translateY(5px) rotate(45deg);
              } @else if $i == 2 {
                transform: rotate(-45deg)
              } @else {
                // display: none;
                transform: translateY(-5px) rotate(45deg);
              }

              margin: 0;
              transition: .5s;
            }
          }
        }
      }
    }

    &.main-page {
      .mobile-button {
        transform: translateX(0);
        opacity: 1;
        transition: .5s;

        @for $i from 1 to 4 {
          &.item-#{$i} {
            // transform: translateY(0);
            transition-delay: $i * 0.4s;
            transition: .5s;
          }
        }
      }
    }
  } // END &.mobile

  .mobile-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 9998;
    background: $IU-Header-Black;
    transform: translateY(-60px);

    .menu-item {
      line-height: 40px;
      color: $IU-LightViolet;
      font-size: 40px;
      text-align: center;
      
      + .menu-item {
        margin-top: 40px;
      }
    }
  }
}
</style>