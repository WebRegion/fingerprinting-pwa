/*
    Made By Richard Anderson!
    Contact Me: https://links.richardjanderson.uk
    Designed for Project "Fingerprint Generator" (https://github.com/richardjanderson9/fingerprint-generator).
*/

function start_tests(){
    // Controls Counter for Delay!
    const delay_counter = (250); // Current Set = 0.25s!
    const test_runs = (5); // Sets Repeat for tests!
    const zero = (0); // Enables a start! 
    /*
        Section for Test 1!
    */
        // Blocks Running of Function!
        setTimeout(load_test_1, delay_counter); // Function Name, Time (ms).
        // Function to Start Test!
        function load_test_1() {
            // Sets Data! REQUIRED for Processing of Data!
            const test_number = (1); // Test Number!
            // Function | Changes status of test of web-page!
            change_status(test_number, "started"); // Varable, status!
            // Runs JS Test!
            test_1(test_runs, zero, test_number); // Calls Function Below! Enables Collcetion of Fingerprint!
        }
    /*
        Section for Test 2!
    */
        // Adds JS to Page!
        let js_test_2 = document.createElement("script");
        js_test_2.setAttribute("src", "/assets/js/test_files/test_2.js");
        document.body.appendChild(js_test_2);
        // Blocks Running of Function (to enable JS file to be processed)!
        setTimeout(load_test_2, delay_counter); // Function Name, Time (ms).
        // Function to Start Test!
        function load_test_2() {
            // Sets Data! REQUIRED for Processing of Data!
            const test_number = (2); // Test Number!
            // Function | Changes status of test of web-page!
            change_status(test_number, "started"); // Varable, status!
            // Runs JS Test!
            test_2(test_runs, zero, test_number); // Calls Function Below! Enables Collcetion of Fingerprint!
        }
    /*
        Section for Test 3!
    */
        // Blocks Running of Function!
        setTimeout(load_test_3, delay_counter); // Function Name, Time (ms).
        // Function to Start Test!
        function load_test_3() {
            // Sets Data! REQUIRED for Processing of Data!
            const test_number = (3); // Test Number!
            // Function | Changes status of test of web-page!
            change_status(test_number, "started"); // Varable, status!
            // Runs JS Test!
            test_3(test_runs, zero, test_number); // Calls Function Below! Enables Collcetion of Fingerprint!
        }   
}

function test_1(run_of_runs, zero, test_num){
    /*
        License: MIT License (https://github.com/fingerprintjs/fingerprintjs/blob/master/LICENSE)!
        Check Date: 21 June 2022 (version checked (commit: 03a18a6))!
        //
        Source Code (online): https://github.com/fingerprintjs/fingerprintjs#quick-start
        Location Local: /assets/js/test_files/test_1.js
        Note: Modified to enable storage of data (cookies | with encrypted data).
    */
    // Sets UP Data Storage!
    const fingerprint_data = [];
    var array_entry = zero;

    for (let counter = zero; counter < run_of_runs; counter++){
        const fingerprint_link = ("/assets/js/test_files/test_1.js");
        // Configures the Fingerprint to Load!
        const fingerprint_run = import(fingerprint_link).then(FingerprintJS => FingerprintJS.load());
        // Gets the Information (of the visitor)!
        // STARTS!
            // Get the visitor identifier when you need it.
        fingerprint_run.then(fp => fp.get()).then(result =>{
            const visitorId = result.visitorId;
            fingerprint_data[array_entry] = (visitorId); // Puts visitorId in array by usering (counter clone 'array_entry') as the number.
            array_entry++;
            // Compares Enties to Run Number!
            if (array_entry == run_of_runs){
                check_fingerprints(test_num, fingerprint_data);
            }    
        }).catch(error => console.error(error))    
    }
}

function test_2(run_of_runs, zero, test_num){
    /*
        License: MIT License (https://github.com/artem0/canvas-fingerprinting/blob/master/LICENSE)!
        Check Date: 22 June 2022 (version checked (commit: 2d36abb))!
        //
        Source Code: https://github.com/artem0/canvas-fingerprinting#library-usage
        Note: Modified to enable storage of data (cookies | with encrypted data).
    */
    // Sets UP Data Storage!
    const fingerprint_data = [];
    var array_entry = zero;

    for (let counter = zero; counter < run_of_runs; counter++){
        var withCanvasDrawing = new Fingerprint({canvas: true});      
        var fingerprint = (withCanvasDrawing.get());
        fingerprint_data[array_entry] = (fingerprint); // Puts visitorId in array by usering (counter clone 'array_entry') as the number.
        array_entry++;
    }
    // Moves Data for Processing!
    check_fingerprints(test_num, fingerprint_data);
}

function test_3(run_of_runs, zero, test_num){
    /*
        License: Not Provided! (Assumed Unrestricted, due to hosting websites policy)!
        Check Date: 23 June 2022!"
        //
        Source Code: https://jsfiddle.net/sokcuri/1sn6qrv3/2
        Note: Modified to enable storage of data (cookies | with encrypted data).
    */
    // Sets UP Data Storage!
    const fingerprint_data = [];
    var array_entry = zero;

    // Stores the Data for the loop counter, and the results!
    for (let counter = zero; counter < run_of_runs; counter++){
        var canvas = document.createElement('canvas');
        var gl = canvas.getContext('webgl');

        var debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        var renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

        // Build Hash of Fingerprint!
        var hash = 0;              
        if (renderer.length == 0) return hash;
        for (i = 0; i < renderer.length; i++){
            char = renderer.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        fingerprint_data[array_entry] = (hash); // Puts visitorId in array by usering (counter clone 'array_entry') as the number.
        array_entry++;
    }
    // Moves Data for Processing!
    check_fingerprints(test_num, fingerprint_data);
}

function check_fingerprints(test_number, data){
    // Checks Data in Array is Equal or Not! | Called: Below!
    function areSame(data){
        // Put all array elements in a HashSet
        let s = new Set(data);  
        // If all elements are same, size of
        // HashSet should be 1. As HashSet contains only distinct values.
        return (s.size == 1);
    }
    // Runs Function and processed data (same or not)!
    if (areSame(data)){
        // Function | Changes status of test of web-page!
        change_status(test_number, "ended"); // Varable, status!
        format_cookies(test_number, data);
    }          
    else{
        // Function | Changes status of test of web-page!
        change_status(test_number, "failed"); // Varable, status!
    }  
}

function change_status(test_number, data){
    // Sets colour of text (visable)!
    const set_colour_green = ("green"); // Text Says: Passed!
    const set_colour_yellow = ("yellow"); // Text Says: Starting!
    const set_colour_red = ("red"); // Text Says: Failed!
    // Sets change to Text!
    const set_text_started = ("Started!"); // Colour set to Yellow!    
    const set_text_passed = ("Passed!"); // Colour set to Green!
    const set_text_failed = ("Failed!"); // Colour set to Red!
    // Enables Element ID to be Found!    
    const ID_finder = ("test_" + test_number + "_data");
    
    if (data == "started"){
        status_started();
    }
    else if (data == "ended"){
        status_ended();
    }
    else if (data == "failed"){
        status_failed();
    }

    function status_started(){
        document.getElementById(ID_finder).style.color = set_colour_yellow;
        const header = document.getElementById(ID_finder);
        header.textContent = set_text_started;
    }
    function status_ended(){
        document.getElementById(ID_finder).style.color = set_colour_green;
        const header = document.getElementById(ID_finder);
        header.textContent = set_text_passed;
    }
    function status_failed(){
        document.getElementById(ID_finder).style.color = set_colour_red;
        const header = document.getElementById(ID_finder);
        header.textContent = set_text_failed;
    }
}

function format_cookies(test_number, data){
    // Sets Cookie Name!
    const cookie_name = ("test_data_" + test_number);
    // Process Data for Cookie!
    const cookie_value = data.shift();
    // Sets Cookie Path!
    const cookie_path = ("/");
    // Writes Cookie!
    set_cookie(cookie_name, cookie_value, cookie_path)
}
