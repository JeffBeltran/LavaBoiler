<template>
<div class="Site">
  <bulma-navigation></bulma-navigation>
  <div class="Site-content">
    <router-view></router-view>
  </div>
  <bulma-footer></bulma-footer>
</div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {

  }
}
</script>

<style lang="scss">

.Site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.Site-content {
  flex: 1;
}

// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// // Set your colors
// $primary: #8c67ef;
// $primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

</style>
