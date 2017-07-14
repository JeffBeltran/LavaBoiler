// import localforage from 'localforage';

import Cookie from 'js-cookie'

export const register = ({ dispatch }, { payload,	context }) => {
	return axios.post('/register', payload).then((response) => {
		context.errors.clearAll();
		dispatch("fetchUser");
	}).catch((error) => {
		console.log('errors');
		context.errors.record(error.response.data);
	})
}

export const login = ({ dispatch }, { payload, context }) => {
    return axios.post('/login', payload).then((response) => {
			console.log(response);
			context.errors.clearAll();
			dispatch("fetchUser");
    }).catch((error) => {
			console.log('not logged in');
			context.errors.record(error.response.data);
    })
}

export const fetchUser = ({ commit }) => {
	return axios.get('/api/user').then((response) => {
		commit('setAuthenticated', true);
		commit('setUserData', response.data)
	}).catch((error) => {
		console.log(error);
		//context.errors = error.response.data.errors
	})
}

// export const logoutUser = ({ dispatch }) => {
// 	return axios.post('/api/logout').then((response) => {
// 		dispatch('clearAuth');
// 	})
// }
//
// export const setToken = ({ commit,	dispatch }, token ) => {
// 	if(_.isEmpty(token)){
// 		return dispatch('checkTokenExists').then((token) => {
// 			setHttpToken(token);
// 		})
// 	}
//
// 	commit('setToken', token);
// 	setHttpToken(token);
// }
//
// export const checkTokenExists = ({ commit,	dispatch }, token ) => {
// 	return localforage.getItem('authtoken').then((token) => {
// 		if(_.isEmpty(token)){
// 			return Promise.reject('NO_STORAGE_TOKEN');
// 		}
// 		return Promise.resolve(token);
// 	});
// }
//
// export const clearAuth = ({ commit }, token ) => {
// 	commit('setAuthenticated', false);
// 	commit('setUserData', null);
// 	commit('setToken', null);
// 	setHttpToken(null);
// }
