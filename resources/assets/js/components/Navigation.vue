<template>
<nav class="navbar">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      <i class="fa fa-fire fa-fw" aria-hidden="true"></i> LavaBoiler
    </a>

    <a class="navbar-item is-hidden-desktop" href="#">
      Register
    </a>
    <a class="navbar-item is-hidden-desktop" href="#">
      Login
    </a>

    <div class="navbar-burger burger" data-target="navMenuExample" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navMenuExample" class="navbar-menu" :class="{ 'is-active': showNav }">
    <div class="navbar-start">
      <a class="navbar-item " href="http://bulma.io/">
        Home
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="navbar-item" href="#">
              Register
            </a>
          </p>
          <p class="control">
            <a class="button is-primary" href="#">
              <span class="icon">
                <i class="fa fa-sign-in"></i>
              </span>
              <span>Login</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
    };
  },
  methods: {

  }
}
</script>

<style lang="css">

</style>
