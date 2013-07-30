/*global define */
define(function () {
	'use strict';

	return function (todo) {
		todo.text = todo.text && todo.text.trim() || '';
		todo.completed = !!todo.completed;

		return todo;
	};
});
