//amplitude.getInstance().setUserProperties({
//    last_purchase: '2024-04-10'
//});


// Fetch the current URL's query string
//const params = new URLSearchParams(window.location.search);

// Get the value of the 'n' parameter
// const name = params.get('n');
// const title = params.get('t');

// Function to extract URL parameters
function getQueryParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function hasQueryParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.has(param);
}

var pageTitle = getQueryParam('ti');

// Check if any parameters are present
if (sender) {
    document.getElementById('message').innerHTML = 'The invitation has expired <br><br> Ask <a id="inviter_name">a</a> for a new one';
}

// If a name is provided in the URL, use it; otherwise, keep the default "Guest"
if (sender) {
    const formattedName = sender.replace(/\./g, ' ');  // Replace all hyphens with spaces using a regular expression
    document.getElementById('inviter_name').textContent = formattedName;
} else {
    console.log("No 'r' parameter found in the URL.");
}

if (pageTitle) {
    document.getElementById('url_title').textContent = pageTitle;
} else {
    console.log("No 'ti' parameter found in the URL.");
}

  
//  document.getElementById('inviter_name').innerText = 'Daniil Liberman';
	