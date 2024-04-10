// Assuming the URL is like ?sender=John&recipient=Jane&text_variant=1

// Function to extract URL parameters
function getQueryParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function hasQueryParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.has(param);
}

// Extract parameters
var sender = getQueryParam('s');
var recipient = getQueryParam('r');
var text_variant = getQueryParam('tx');
var pExists = hasQueryParam('p');


// Log the event to Amplitude
amplitude.getInstance().logEvent('Invitation Page Visited', {
    sender: sender,
    recipient: recipient,
    text_variant: text_variant,
    p_present: pExists
});


// Fetch the current URL's query string
//const params = new URLSearchParams(window.location.search);

// Get the value of the 'n' parameter
// const name = params.get('n');
// const title = params.get('t');

  
  
// If a name is provided in the URL, use it; otherwise, keep the default "Guest"
if (sender) {
    const formattedName = sender.replace(/\./g, ' ');  // Replace all hyphens with spaces using a regular expression
    document.getElementById('inviter_name').textContent = formattedName;
} else {
    console.log("No 'r' parameter found in the URL.");
}

//if (title) {
//    document.getElementById('url_title').textContent = title;
//} else {
//    console.log("No 't' parameter found in the URL.");
//}

  
//  document.getElementById('inviter_name').innerText = 'Daniil Liberman';
