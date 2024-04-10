// include the following lines in your HTML file
// <script src="amplitude_http_api.js"></script>
// <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

// document.getElementById('new').innerText = '2';

        (function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")
        ;r.type="text/javascript",r.integrity="sha384-girahbTbYZN6r6r9XrEI6eSBF83J6v2C7Tl2mL1yeyzj3lW9mkNlFWowwrRLLVKn",r.crossOrigin="anonymous",r.async=true
        ,r.src="https://cdn.amplitude.com/libs/amplitude-8.5.0-min.gz.js"
        ;r.onload=function(){if(!e.amplitude.runQueuedFunctions){
            console.log("[Amplitude] Error: could not load SDK")}}
        ;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)
        ;function s(e,t){e.prototype[t]=function(){
            this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}
        var o=function(){this._q=[];return this}
        ;var a=["add","append","clearAll","prepend","set","setOnce","unset"]
        ;for(var c=0;c<a.length;c++){s(o,a[c])}n.Identify=o;var u=function(){this._q=[]
        ;return this}
        ;var p=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"]
        ;for(var l=0;l<p.length;l++){s(u,p[l])}n.Revenue=u
        ;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut",
        "setVersionName","setDomain","setDeviceId","setGlobalUserProperties","identify",
        "clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","groupIdentify",
        "onInit","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId"]
        ;function v(e){function t(n){e[n]=function(){
            e._q.push([n].concat(Array.prototype.slice.call(arguments,0)))}}
        for(var r=0;r<d.length;r++){t(d[r])}}v(n);n.getInstance=function(e){
            e=(!e||e.length===0?"$default_instance":e).toLowerCase()
            ;if(!n._iq.hasOwnProperty(e)){n._iq[e]={_q:[]};v(n._iq[e])}return n._iq[e]}
        ;e.amplitude=n})(window,document);

        amplitude.getInstance().init("8bd4dcccc01471286562f158edfd65f7");

// amplitude_http_api.js
// $.ajax({
//    url: 'https://api2.amplitude.com/2/httpapi',
//  method: 'POST',
//    headers: {
//        'Content-Type': 'application/json',
//        'Accept': '*/*'
//    },
//    success: function () {
//        console.log(JSON.stringify({
//           "api_key": "8bd4dcccc01471286562f158edfd65f7",
//            "events": [{
//                "device_id": "<INSERT DEVICE ID>",
//                "event_type": "Sign up"
//            }]
//        }));
//    }
//})
