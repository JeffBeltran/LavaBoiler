import {
	Login,
	Register
}
from '../components';

export default [
	{
		path: '/login',
		component: Login,
		name: 'login',
		meta: {
			guestOnly: true,
			needsAuth: false
		}
  },
  {
		path: '/register',
		component: Register,
		name: 'register',
		meta: {
			guestOnly: true,
			needsAuth: false
		}
  }
];
