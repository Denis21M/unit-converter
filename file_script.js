function convert(){
    const inputedValue = document.getElementById("in").value;
    const selectedUnit = document.getElementById("converter").value;

    let result = 0;
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