// Listen for messages from background.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        // Get URL message
        if (request.getURL) {
            // Send URL back
            sendResponse({myURL: window.location.href});
        }
    }
  );