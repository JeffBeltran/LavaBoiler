/**
 * This class handles form errors relating to validation based on
 * laravel's handling of validation.
 * @type {Object}
 */
export class FormErrors {
	constructor() {
		this.errors = {};
	}

	get(field) {
		if (this.errors[field]) {
			// Laravel Auth Validaiton will return string on invalid login credentials
			// instead of an array of errors. So this check is in place unless
			// https://github.com/laravel/framework/pull/20054 gets accepted

			if (_.isArray(this.errors[field])) {
				return this.errors[field][0];
			} else {
				return this.errors[field];
			}
		}
	}

	record(errors) {
		this.errors = errors;
	}


	clear(field) {
		delete this.errors[field];
	}

	clearAll() {
		this.errors = {}
	}

	has(field) {
		return this.errors.hasOwnProperty(field);
	}

	any() {
		return !_.isEmpty(this.errors);
	}

}
