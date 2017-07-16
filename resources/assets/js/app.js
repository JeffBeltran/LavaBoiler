import router from './router';
import store from './vuex';
import localforage from 'localforage';

localforage.config({
	driver: localforage.LOCALSTORAGE,
	storeName: 'lavaboiler'
})

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

Vue.use(Buefy, {
	defaultIconPack: 'fa',
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('bulma-navigation', require('./components/Navigation.vue'));
Vue.component('bulma-footer', require('./components/Footer.vue'));
Vue.component('app', require('./components/App.vue'));
Vue.component('passport-clients', require('./components/passport/Clients.vue'));
Vue.component('passport-authorized-clients', require('./components/passport/AuthorizedClients.vue'));
Vue.component('passport-personal-access-tokens', require('./components/passport/PersonalAccessTokens.vue'));

// store.dispatch('auth/fetchUser').catch((error)=> {
// 	store.dispatch('auth/clearAuth');
// 	//router.replace({name: 'login'});
// });

const app = new Vue({
	el: '#app',
	store: store,
	router: router,
});
