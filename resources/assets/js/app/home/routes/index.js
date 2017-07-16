import {
	Home
}
from '../components';

export default [
	{
		path: '/',
		component: Home,
		name: 'home',
		meta: {
			guestOnly: false,
			needsAuth: false
		}
  }
];
