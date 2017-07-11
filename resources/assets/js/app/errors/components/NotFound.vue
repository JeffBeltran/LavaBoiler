<template lang="html">
  <div class="row">
      <div class="col-md-8 col-md-offset-2">
           <div class="error-template">
               <h1>Oops!</h1>
               <h2>404 Not Found</h2>
               <div class="error-details">
                   Sorry, The requested page not found!
               </div>
               <div class="error-actions">
                 <router-link :to="{ name: 'home'}" class="btn btn-primary btn-lg">Take Me Home</router-link>
               </div>
           </div>
       </div>
   </div>

</template>

<script>
export default {}
</script>

<style lang="css">
.error-template {padding: 40px 15px;text-align: center;}
.error-actions {margin-top:15px;margin-bottom:15px;}
.error-actions .btn { margin-right:10px; }
</style>
