<template>
  <header :class="{'not-main': !isMainPage, 'mobile': $device.isMobile}">
    <div class="header-contents" :class="{'clicked': isMobileClick}">
      <!-- Mobile Menu -->
      <template v-if="$device.isMobile">
        <div class="mobile-button" @click="onClickMobile">
          <span class="button-item item-1" />
          <span class="button-item item-2" />
          <span class="button-item item-3" />
        </div>
        <ul class="mobile-menu" :class="{'clicked': isMobileClick}">
          <li
            v-for="(menu, index) in menuList"
            :key="menu"
            :class="['menu-item', `item-${index}`, { selected: isSelected(menu) }]"
            @click.self="onClickMobileMenu(menu.toLowerCase())"
            >
            {{ menu }}
          </li>
        </ul>
      </template>
      <!-- Desktop Menu -->
      <template v-else>
        <NuxtLink v-if="!isMainPage" :to="$urls.main">
          <b class="header-title"> WITH U, <span class="accent"> IU </span> </b>
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
      isMobileClick: false,
      menuList: ['Album', 'Filmography', 'AD', 'History', 'Board'],
    }
  },
  computed: {
    isMainPage() {
      return this.$route.path === this.$urls.main
          || this.$route.path === this.$urls.mobile.main
    },
  },
  methods: {
    isSelected(item) {
      return this.$route.path.includes(item.toLowerCase())
    },
    onClickMobile() {
      this.isMobileClick = !this.isMobileClick
    },
    onClickMobileMenu(menu) {
      this.onClickMobile()

      this.$router.push(this.$urls.mobile[menu])
    }
  },
}
</script>

<style lang="scss" scope>
$IU-Header-Pink: rgba(242, 226, 220, 0.9);
$IU-Header-Black: rgba(13, 13, 13, 0.75);

@include slide-right(50);
@include slide-down(40);

// TODO CHECK :: ANIMATION EFFECT
@include keyframes(mobile-button) {
  from {
    background-color: $IU-DeepViolet;
  }

  50% {
    background-color: $IU-LightViolet;
  }
}

header {
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  line-height: 80px;
  z-index: 1000;

  &.not-main {
    background: $IU-Black;
  }

  .mobile & {
    height: 60px;
    line-height: 60px;
  }
}

.header-contents {
  max-width: 1080px;
  height: 100%;
  position: relative;
  margin: 0 auto;
  font-size: 24px;

  .header-title {
    color: $IU-White;
    font-size: 36px;
    font-family: 'Roboto';
    font-weight: bold;
    font-style: italic;
    opacity: 0;

    @include animation(slide-right-50, 1s);

    .accent {
      color: $IU-Neon-A90;
    }
  }
}

.header-menu {
  width: 70%;
  height: 50px;
  display: flex;
  float: right;
  margin: 15px;

  .menu-item {
    flex: 1;
    line-height: 40px;
    margin: 5px 10px;
    color: $IU-Header-Pink;
    text-align: center;

    .not-main & {
      color: $IU-LightViolet;
    }

    &.selected {
      color: $IU-DeepViolet;
    }

    @for $i from 0 to 5 {
      &.item-#{$i} {
        @include animation(slide-down-40, .5s, $i * 0.5s, backwards);
      }
    }
  }
}

.mobile-button {
  width: 60px;
  height: 60px;
  position: absolute;
  @include flex-center;
  flex-direction: column;
  top: 0;
  right: 0;
  z-index: 3000;

  .button-item {
    width: 35px;
    height: 5px;
    border-radius: 10px;
    background: $IU-Header-Pink;

    + .button-item {
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

        .clicked & {
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
  }
}

.mobile-menu {
  width: 5px;
  height: 35px;
  @include flex-center;
  flex-direction: column;
  position: absolute;
  top: 40px;
  right: 45px;
  border-radius: 10px;
  background-color: $IU-Header-Pink;
  overflow: hidden;
  z-index: 2000;
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
    cursor: pointer;
    display: none;
    opacity: 0;
  }

  .clicked & {
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    background-color: $IU-Header-Black;
    opacity: 1;
    transform: rotate(0);
    transition: .5s;

    .menu-item {
      display: inline-block;
      opacity: 1;
    }
  }
}
</style>