
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      
    if (request.popupOpen) {

        console.log("Got message Popup Open");

        // Active Tab 
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

            // Send getURL to Active Tab and Wait for a response
            console.log("Send getURL message");
            chrome.tabs.sendMessage(tabs[0].id, {getURL: true}, function(response) {
                console.log("Got Response: " + response.myURL);
                console.log("Send URL to popup");
                chrome.runtime.sendMessage({popupMsg: response.myURL});
            });

        });

    }

});

