// Listen for messages from background.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        // Get Title message
        if (request.getTitle) {
            // Send Title back
            sendResponse({myTitle: document.title});
        }

        // Get Button message
        if (request.getButton) {
            // Get first Connect button
            let connect = document.querySelector('button[type=button].pvs-profile-actions__action');;
            if (connect) {
                connect.click();
            }
        }

    }
  );