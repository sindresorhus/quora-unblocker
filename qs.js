(function (exports) {
	'use strict';

	exports.parse = function (str) {
		var query = str.split('?')[1];

		if (!query) {
			return {};
		}

		return query.trim().split('&').reduce(function (ret, param) {
			var parts = param.split('=');
			// Missing `=` is null:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			ret[parts[0]] = parts[1] === undefined ? null : decodeURIComponent(parts[1]);
			return ret;
		}, {});
	};

	exports.stringify = function (obj) {
		return Object.keys(obj).map(function (key) {
			return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
		}).join('&');
	};
})(typeof exports !== 'undefined' ? exports : window.qs = {});
