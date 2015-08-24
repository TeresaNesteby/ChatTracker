'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('users').factory('Users', ['$resource',
	function($resource) {
		return $resource('users', {firstName: '@firstName', lastName: '@lastName', username: }, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
