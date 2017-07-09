<template>
<div class="row">
  <div class="col-md-8 col-md-offset-2">
    <div class="panel panel-default">
      <div class="panel-heading">Example Component</div>

      <div class="panel-body">
        I'm an example component!
        <button @click="getUser">Get User</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  mounted() {
    console.log('Component mounted.')
  },
  methods: {
    getUser(){
      axios.get('/api/user')
        .then(response => {
          console.log(response.data);
        });
    }
  }
}
</script>
