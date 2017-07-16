import store from '../vuex';
import localforage from 'localforage';

const beforeEach = ((to, from, next) => {

  if(to.meta.guestOnly && !to.meta.needsAuth){
    next();
    return
  }

  store.dispatch("auth/fetchUser").then(() => {
    if (to.meta.guestOnly) {
      next({ name: from.name });
      return
    }

    next();
  }).catch((error)=> {

    if (to.meta.needsAuth) {
      localforage.setItem('intended', to.name);
      next({ name: 'login' });
      return
    }

    next();
  });

});

export default beforeEach;
