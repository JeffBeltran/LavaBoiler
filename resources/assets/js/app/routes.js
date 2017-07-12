import auth from './auth/routes';
import errors from './errors/routes';
import home from './home/routes';
import users from './user/routes';

// make sure errors is imported last to handle 404
export default [...home, ...auth, ...users, ...errors];
