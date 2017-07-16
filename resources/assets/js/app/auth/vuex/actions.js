// import localforage from 'localforage';

import Cookie from 'js-cookie';

export const register = ({ dispatch }, { payload,	context }) => {
	return axios.post('/register', payload).then((response) => {
		context.errors.clearAll();
		//dispatch("fetchUser");
	}).catch((error) => {
		context.errors.record(error.response.data);
	})
}

export const login = ({ dispatch, commit }, { payload, context }) => {
    return axios.post('/login', payload).then((response) => {
			context.errors.clearAll();
    }).catch((error) => {
			context.errors.record(error.response.data);
    })
}

export const fetchUser = ({ commit }) => {
	return axios.get('/api/user').then((response) => {
		commit('setAuthenticated', true);
		commit('setUserData', response.data)
	}).catch((error) => {
		return Promise.reject(error);
		//context.errors = error.response.data.errors
	})
}

export const logoutUser = ({ dispatch }) => {
	return axios.post('/logout').then((response) => {
		dispatch('clearAuth');
		// need to refresh to update CSRF token
		location.reload()
	})
}

export const clearAuth = ({ commit }) => {
	commit('setAuthenticated', false);
	commit('setUserData', null);
}
