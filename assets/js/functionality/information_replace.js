/*
    Made By Richard Anderson!
    Contact Me: https://links.richardjanderson.uk
    Designed for Project "Fingerprint Generator" (https://github.com/richardjanderson9/fingerprint-generator).
*/

// J-QUERY!!
function change_modal(){
    $("button").click(function() {
        // Gets Information About ID of Pressed Button!
        var button_pressed = (this.id); // Gets ID!
        var btn_processed = button_pressed.slice(-4); // Checks for "data" at the end of the ID.
        // Blocks Anything thats not data related!
        if (btn_processed == "data"){
            change_information(button_pressed); // Function: information_replace.js
        }
    });
}

// Changes Information! | Is called from testing.js! 
function change_information(data){
    // FROM JSON!
        // Processes Data!
        var data_number = data.slice(5, 6); // Enables a method of assigning number to JSON, limiting erros in processing!
        
        // Processes Json Location Based on Number!
        const json_location = ("/assets/js/json/fp_data_" + data_number + ".json");

        // Changes Information Based on Static Information Above!
        $(function(){        
            // Gets JSON Information! | Based on Varables above!
            $.getJSON(json_location, function(json_content){
                // Sets Data from JSON!
                const store_title = `${json_content.title}`; //
                const store_infomation = `${json_content.information}`; //               
                // Places Information!
                $(".adapt-title").html(store_title);
                $(".adapt-information").html(store_infomation);          
            })   
        })

    // FROM COOKIE!
        var all_cookie = (document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumlator, [key, value]) =>({ ...accumlator, [key.trim()]: decodeURIComponent(value)}),{})); // Gets current set cookies!
        
        if (data_number == ("1")){
            const cookie_data = (all_cookie.test_data_1);
            add_cookie_data(cookie_data);
        }
        else if (data_number == ("2")){
            const cookie_data = (all_cookie.test_data_2);
            add_cookie_data(cookie_data);
        }
        else if (data_number == ("3")){
            const cookie_data = (all_cookie.test_data_3);
            add_cookie_data(cookie_data);
        }

    // Function to Add Cookie Data!
        function add_cookie_data(data){
            const cookie_data_show = ("Fingerprint: " + data);            
            $(".cookie-data").html(cookie_data_show);
        }       
}
