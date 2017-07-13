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
			return this.errors[field][0];
		}
	}

	record(errors) {
		this.errors = errors;
	}

	has(field) {
		return this.errors.hasOwnProperty(field);
	}

	clear(field) {
		delete this.errors[field];
	}

	any() {
		return !_.isEmpty(this.errors);
	}
}
