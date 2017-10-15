chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.debug('content-script');
		alert('content-script');
	}
);
document.body.addEventListener('click', function(arg1, arg2) {
	console.debug("Element was clicked: " + arg1);
}, true);