chrome.runtime.onMessage.addListener(function(request, sender) {
    chrome.tabs.update(null, {url: request.redirect});
});