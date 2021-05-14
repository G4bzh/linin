// Listen for messages from background.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        // Get URL message
        if (request.getTitle) {
            // Send Title back
            sendResponse({myTitle: document.title});
        }
    }
  );