// Constants
 const re_name = /^(?:\(\d{1,}\)\s)?([\w\-]+)\s(.+)\s\|\sLinkedIn.*$/


// Send message to notify popup open event
console.log("Popup Open. Send message to Background.js")
chrome.runtime.sendMessage({popupOpen: true});

// Listen to messages
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.popupMsg) {

        // Prepare for first and last name extraction
        let txtMessage = document.getElementById("txtMessage");
        let lblName = document.getElementById("lblName");
        let lastName = "<LAST_NAME>"
        let firstName  = "<FIRST_NAME>";
        let reName = request.popupMsg.match(re_name);

        // DO we have a match ?
        if (reName) {
            // Assume first match is the first name & second the last name
            firstName  = reName[1];
            lastName  = reName[2];
        }

        // Print names into popup
        lblName.textContent = firstName + " " + lastName;
        txtMessage.textContent = firstName;
        
    }

});
