/*
    Made By Richard Anderson!
    Contact Me: https://links.richardjanderson.uk
    Designed for Project "Fingerprint Generator" (https://github.com/richardjanderson9/fingerprint-generator).
*/

function btn_save(){
    // Checks for User Selection!
    var user_setting = document.getElementById("user-settings");
    // Processes Data!
    var user_value = (user_setting.options[user_setting.selectedIndex].value);
    // Sets Colour!
    const active_colour = user_value;
    // Starts Funciton!
    change_colour(active_colour);
}

function change_colour(data){    
    // Sets Data about Cookie!
    const cookie_name = "customisation_settings";
    const cookie_value = data;
    const cookie_path = "/";
    set_cookie(cookie_name, cookie_value, cookie_path);    

    // Sets Data (Visual)!
    const body_id = ("colour-scheme");
    var selected_colour = (data);
    // Removes old Data!
    const remove_data = document.getElementById(body_id); // Finds Element!
    remove_data.className = ''; // Removes Classes from Element by ID (above)!
    // Adds New Data!    
    document.getElementById(body_id).classList.add(selected_colour);    
}

