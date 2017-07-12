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

<style lang="css">

.Site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.Site-content {
  flex: 1;
}

</style>
