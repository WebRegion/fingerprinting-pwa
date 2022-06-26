/*
    Made By Richard Anderson!
    Contact Me: https://links.richardjanderson.uk
    Designed for Project "Fingerprint Generator" (https://github.com/richardjanderson9/fingerprint-generator).
*/

// Runs on HomePage Load!
function load_stuff_home(){
    // Checks Cookie for Customisation!
    check_cookie("home"); // Located: user_customisation.js    
    // Loads Animation to check for JS.
    setTimeout(check_js, 400); // Located: Below!
}

// Re-Directs Page!
function move_page(){
    location.replace("/run_tests/"); /* Re-directs to different page for the tests! */
}

// Runs on TestPage Load!
function load_stuff_tests(){
    // Checks Cookie for Customisation!
    check_cookie("tests"); // Located: user_customisation.js
    // Starts Testing!
    start_tests(); // Located: testing.js
    // Gets Data! (for User Modals)!
    change_modal(); // Located: testing.js
}

// Checks if Javascript is enabled in the browser!
function check_js(){
    // Sets Data about Cookie!
    const cookie_name = "check_js";
    const cookie_value = "active";
    const cookie_path = "/";
    set_cookie(cookie_name, cookie_value, cookie_path);
    // Removes the Loading Screen!
    hide_loading();
}

//Removes Loading Element!
function hide_loading(){
        // Sets Universal Data!
        const html_tag_hide = "element-hide";
        // Loading Section!
        document.getElementById("loading-area").classList.add(html_tag_hide);
        // Visible Information to User!
        document.getElementById("visible-information").classList.remove(html_tag_hide);
        // Customisation Settings!
        document.getElementById("visible-customisation").classList.remove(html_tag_hide);   
}