function convert(){
    const inputedValue = document.getElementById("in").value;
    const selectedUnit = document.getElementById("converter").value;


    if (!inputedValue) {
        alert("Please enter a value to convert");
        return;}

    switch (selectedUnit){

    case "KmToMiles":
        result = inputedValue/1.60934;
    break;

    case "MilesToKm": 
        result = inputedValue*1.60934;
    break;

    case "CmToFt":
        result = inputedValue/30.48;
    break;

    case "FtToCm":
        result = inputedValue*30.48;
    break;

    case "MToInches":
        result = inputedValue*39.37;
    break;

    case "InchesToM":
        result = inputedValue/39.37;
    break;

    case "CmToKm":
        result = inputedValue/100000;
    break;

    case "KmToCm":
        result = inputedValue*100000;
    break;

    case "CmToMiles":
        result = inputedValue/160900;
    break;

    case "MilesToCm":
        result = inputedValue*160900;
    break;

    case "FtToKm":
        result = inputedValue/3281;
    break;

    case "KmToFt":
        result = inputedValue*3281;
    break;

    case "FtToMiles":
        result = inputedValue/5280;
    break;

    case "MilesToFt":
        result = inputedValue*5280;
    break;

    case "KgToGrams":
        result = inputedValue*1000;
    break;

    case "GramsToKg":
        result = inputedValue/1000;
    break;

    case "KgToPounds":
        result = inputedValue*2205;
    break;

    case "PoundsToKg":
        result = inputedValue/2205;
    break;

    default:
        result = "invalid conversion";

    }
    document.getElementById("result").innerHTML = result;
}


function sendFeedback(event) {
    event.preventDefault();

    const feedback = document.getElementById("type1").value;
    const thankYouMessage1 = document.getElementById("note1");

    

    if (feedback.trim()) {  
        thankYouMessage1.style.display = "block";
        thankYouMessage1.innerHTML = "Thank you for your Feedback. Note: This web application is still work in progress thus unable to save your request in the server yet, for this reason, we will prefer you send the request via the Linkedln link below. Kindly bear with us.";

        console.log("User Feedback:", feedback);

    
    } else {
        alert("Please enter your feedback before submitting.");
    }
}

function sendHelp(event) {
    event.preventDefault();

    const request = document.getElementById("type2").value;
    const thankYouMessage2 = document.getElementById("note2");

    if (request.trim()) {  
        thankYouMessage2.style.display = "block";
        thankYouMessage2.innerHTML = "Thank you for reaching out. Note: This web application is still work in progress thus unable to save your request in the server yet, for this reason, we will prefer you send the request via the Linkedln link below. Kindly bear with us.";

        console.log("User request:", request);

    
    } else {
        alert("Please enter your request before submitting.");
    }
}
