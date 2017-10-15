chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  alert('extension');
});

chrome.browserAction.onClicked.addListener(function(tab) {
	alert('clicked');
});