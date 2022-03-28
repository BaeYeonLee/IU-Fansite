<template>
  <header ref="header">
    <div class="header-contents">
      <!-- Mobile Menu -->
      <template v-if="isMobileDevice">
        <div class="mobile-btn" @click.self="onClickMobile"></div>
        <a class="header-mobile" :class="{'clicked': isMobileClick}">
          <span class="mobile-button item-1" />
          <span class="mobile-button item-2" />
          <span class="mobile-button item-3" />
          <ul class="mobile-menu">
            <NuxtLink
              v-for="(menu, index) in menuList"
              :key="menu"
              :class="['menu-item', `item-${index}`, { selected: isSelected(menu) }]"
              :to="`/${menu.toLowerCase()}`"
              >
              {{ menu }}
            </NuxtLink>
          </ul>
        </a>
      </template>
      <!-- Desktop Menu -->
      <template v-else>
        <NuxtLink :to="$urls.main" class="header-title">
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
      </template>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMobileDevice: false,
      isMobileClick: false,
      menuList: ['Album', 'Filmography', 'AD', 'History', 'Board'],
    }
  },
  computed: {
    isMainPage() {
      return this.$route.path === this.$urls.main
    },
  },
  mounted() {
    const headerClass = this.isMainPage ? 'main-page' : 'menu'
    this.$refs.header.classList.add(headerClass)

    if( this.$isMobileDevice() ) {
      this.$refs.header.classList.add('mobile')
      this.isMobileDevice = true
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

// TODO CHECK :: ANIMATION EFFECT
@keyframes mobile-button {
  from {
    background-color: $IU-DeepViolet;
  }

  50% {
    background-color: $IU-LightViolet;
  }
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 1000;

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

  // Mobile Style
  .header-mobile,
  .mobile-btn {
    display: none;
  }

  &.mobile {
    height: 60px;

    .header-contents {
      height: 60px;
    }

    .header-title, .header-menu {
      display: none;
    }

    .mobile-btn {
      display: inline-block;
      position: fixed;
      z-index: 4000;
      width: 60px;
      height: 60px;
      top: 0;
      right: 0;
    }

    .header-mobile {
      float: right;
      width: 60px;
      height: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .mobile-button {
        width: 35px;
        height: 5px;
        border-radius: 10px;
        background: $IU-Header-Pink;

        + .mobile-button {
          margin-top: 5px;
        }

        @for $i from 1 to 4 {
          &.item-#{$i} {
            transition: .5s;
            animation-name: mobile-button;
            animation-duration: .5s;
            animation-delay: ($i - 1) * .5s;

            @if $i == 3 {
              visibility: hidden;
            }
          }
        }
      }

      .mobile-menu {
        width: 5px;
        height: 35px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        position: absolute;
        top: 40px;
        right: 45px;
        border-radius: 10px;
        background-color: $IU-Header-Pink;
        overflow: hidden;
        transform: rotate(-90deg);
        transform-origin: top;
        transition: .5s;
        animation-name: mobile-button;
        animation-duration: .5s;
        animation-delay: 1s;

        .menu-item {
          color: $IU-Header-Pink;
          font-size: 40px;
          line-height: 80px;
          text-align: center;
          display: none;
          opacity: 0;
        }
      }
      // end .header-mobile default

      &.clicked {
        .mobile-button {
          z-index: 3000;
          @for $i from 1 to 3 {
            &.item-#{$i} {
              @if $i == 1 {
                transform: translateY(5px) rotate(45deg);
              } @else {
                transform: rotate(-45deg)
              }

              margin: 0;
              transition: .5s;
            }
          }
        }

        .mobile-menu {
          transform: rotate(0);
          width: 100vw;
          height: 100vh;
          top: 0;
          right: 0;
          background-color: $IU-Header-Black;

          opacity: 1;
          transition: .5s;

          .menu-item {
            display: inline-block;
            opacity: 1;
          }
        }
      }
    }
    // END .header-mobile clicked

  } // END &.mobile
} 
</style>