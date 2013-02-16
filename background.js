/*global chrome qs */
'use strict';

chrome.webRequest.onBeforeRequest.addListener(function (details) {
	if (details.method !== 'GET') {
		return;
	}

	var url = details.url.split('?')[0];
	var query = qs.parse(details.url);

	query.share = 1;

	return {
		redirectUrl: url + '?' + qs.stringify(query)
	};
}, {
	urls: ['*://quora.com/*', '*://www.quora.com/*'],
	types: ['main_frame']
}, [
	'blocking'
]);
