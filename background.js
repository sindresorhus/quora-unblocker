'use strict';

chrome.webRequest.onBeforeRequest.addListener(function (details) {
	if (details.method !== 'GET') {
		return;
	}

	var parts = details.url.split('?');
	var query = queryString.parse(parts[1]);

	query.share = 1;

	return {
		redirectUrl: parts[0] + '?' + queryString.stringify(query)
	};
}, {
	urls: [
		'*://quora.com/*',
		'*://www.quora.com/*'
	],
	types: [
		'main_frame'
	]
}, [
	'blocking'
]);
