import {
	Login,
	Register,
	PasswordEmail,
	PasswordReset
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
  },
	{
		path: '/password/reset',
		component: PasswordEmail,
		name: 'passwordemail',
		meta: {
			guestOnly: true,
			needsAuth: false
		}
  },
	{
		path: '/password/reset/:token',
		component: PasswordReset,
		name: 'passwordreset',
		meta: {
			guestOnly: true,
			needsAuth: false
		}
  }
];
