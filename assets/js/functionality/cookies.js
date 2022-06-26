/*
    Made By Richard Anderson!
    Contact Me: https://links.richardjanderson.uk
    Designed for Project "Fingerprint Generator" (https://github.com/richardjanderson9/fingerprint-generator).
*/

// Sets Information Into Cookie!
function set_cookie(name, value, path){
    document.cookie = name + "=" + value + ";" + "; path=" + path; // Places the Cookie, using the Information above.
}

// Only Runs on Load!
function check_cookie(data){
    // Gets All Cookies!
    var all_cookie = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumlator, [key, value]) =>({ ...accumlator, [key.trim()]: decodeURIComponent(value)}),{});
    // Gets Required Data from List!
    var customisation_cookie = all_cookie.customisation_settings; // Sets Correct Cookie depending on the file (/assets/js/fingerprint-test/test-{number}.js that requsts the start of the function!
    var check_js_cookie = all_cookie.check_js;
    // Runs if customisation cookie is found!
    if (customisation_cookie != undefined){
        change_colour(customisation_cookie);
    }
    // Runs if javascript cookie is found!
    if (check_js_cookie == "active" && data != "tests"){
        hide_loading();        
    }
}