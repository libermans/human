
// Fetch the current URL's query string
const params = new URLSearchParams(window.location.search);

// Get the value of the 'n' parameter
const name = params.get('n');
const title = params.get('t');

  
  
// If a name is provided in the URL, use it; otherwise, keep the default "Guest"
if (name) {
    const formattedName = name.replace(/\./g, ' ');  // Replace all hyphens with spaces using a regular expression
    document.getElementById('inviter_name').textContent = formattedName;
} else {
    console.log("No 'n' parameter found in the URL.");
}

if (title) {
    document.getElementById('url_title').textContent = title;
} else {
    console.log("No 't' parameter found in the URL.");
}

  
//  document.getElementById('inviter_name').innerText = 'Daniil Liberman';
