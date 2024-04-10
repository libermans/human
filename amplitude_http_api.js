// include the following lines in your HTML file
// <script src="amplitude_http_api.js"></script>
// <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

document.getElementById('new').innerText = '2';

// amplitude_http_api.js
$.ajax({
    url: 'https://api2.amplitude.com/2/httpapi',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
    },
    success: function () {
        console.log(JSON.stringify({
            "api_key": "8bd4dcccc01471286562f158edfd65f7",
            "events": [{
                "device_id": "<INSERT DEVICE ID>",
                "event_type": "Sign up"
            }]
        }));
    }
})
