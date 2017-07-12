import {
	ListUsers
}
from '../components';

export default [
	{
		path: '/users',
		component: ListUsers,
		name: 'users',
		meta: {
			needsAuth: true
		}
  }
];
