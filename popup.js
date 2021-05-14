// SEnd message to notify popup open event
console.log("Popup Open. Send message to Background.js")
chrome.runtime.sendMessage({popupOpen: true});

// Listen to messages
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.popupMsg) {
        // Fill textArea with message
        // (1) Xavier Burban | LinkedIn
        // Xavier Burban | LinkedIn
        let txtMessage = document.getElementById("txtMessage");
        txtMessage.textContent = request.popupMsg;
    }

});
