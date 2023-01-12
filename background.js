'use strict';

chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
	
        if (details.url.indexOf("?share=1") != -1) { return; }
		
        let url = details.url + "?share=1";
		
        chrome.tabs.update(details.tabId, { url: url });
		
    },
	{ url: [{ hostSuffix: 'quora.com' }] }
);
