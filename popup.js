// Send message to notify popup open event
console.log("Popup Open. Send message to Background.js")
chrome.runtime.sendMessage({popupOpen: true});

// Constants
const re_name = /^(?:\(\d{1,}\)\s)?([\w\-]+)\s(.+)\s\|\sLinkedIn.*$/


// Functions

function tmplMessage(fname, isCEO) {

    const strCIO = `bonjour ${fname},

En tant que professionnel de l'informatique du grand ouest comme vous, j'ai pensé qu'il serait pertinent de se connecter pour échanger sur nos aventures et challenges du moment.

Gabriel
Fondateur VeryFrog`

    const strCEO = `Bonjour ${fname},

En tant que dirigeant du grand Ouest comme vous, j'ai pensé qu'il serait pertinent de se connecter afin d'échanger sur nos aventures entrepreneuriales.

Gabriel
Fondateur VeryFrog`

    return (isCEO ? strCEO : strCIO);
}

// Globals
let lastName = "<LAST_NAME>"
let firstName  = "<FIRST_NAME>";

// Radios onChange
let radios = document.querySelectorAll('input[type=radio][name="type"]');
radios.forEach(radio => radio.addEventListener('change', () => document.getElementById("txtMessage").textContent = tmplMessage(firstName, document.getElementById("rCEO").checked) ));

// Button Copy
document.getElementById("btnCopy").addEventListener("click", function() {

    // Copy to Clipboard
    navigator.clipboard.writeText(document.getElementById("txtMessage").textContent).then(function() {
        document.getElementById("lblCopy").textContent = "Message Copié !";
      }, function() {
        document.getElementById("lblCopy").textContent = "Echec de la copie du message !";
      });

});


// Listen to messages
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.popupMsg) {

        // Prepare for first and last name extraction
        let reName = request.popupMsg.match(re_name);

        // DO we have a match ?
        if (reName) {
            // Assume first match is the first name & second the last name
            firstName  = reName[1];
            lastName  = reName[2];
        }

        // Print names into popup
        document.getElementById("lblName").textContent = firstName + " " + lastName;
        document.getElementById("txtMessage").textContent = tmplMessage(firstName, document.getElementById("rCEO").checked);
        
    }

});
