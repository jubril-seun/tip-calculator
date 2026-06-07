/* PSEUDOCODE
The bill is submitted with a tip percentage 
The tip amount is rounded to 2 decimal places
The tip percentage is rated by a string based on range
    under 10% = "poor"
    10% - 14% = "fair"
    15% - 19% = "good"
    20% and above = "great"
The bill can also be split evenly based on how many number of people and rounded to 2 decimal places
A summary of the entire transaction
*/


function calculateTip(billAmount, tipPercent) {
   tipPercent = tipPercent / 100;

    return Number((billAmount * tipPercent).toFixed(2));
}

// console.log(calculateTip(100,10));

function getServiceLabel(tipPercent) {
    
    tipPercent = tipPercent / 100;

    if (tipPercent < .10){
        return ("poor")
    } else if (tipPercent < 0.15){
        return ("fair")
    } else if (tipPercent < 0.20){
        return ("good")
    } else {
        return ("great")
    }
}

// console.log(getServiceLabel(15));

function splitBill(billAmount, tipPercent, numPeople) {
    return ((billAmount + (calculateTip(billAmount, tipPercent))) / numPeople).toFixed(2);
}

// console.log(splitBill(100,10,3));

function summarise(billAmount, tipPercent, numPeople){
    billAmount = Number(billAmount);
    
    console.log("Bill: " + "$" + billAmount.toFixed(2));
    console.log("Tip: " + "$" + calculateTip(billAmount, tipPercent) + " " + "(" + getServiceLabel(tipPercent) + " " + "service" + ")");
    console.log("Total: " + "$" + (billAmount + calculateTip(billAmount, tipPercent)).toFixed(2));
    console.log("Per person: " + "$" + splitBill(billAmount, tipPercent, numPeople));
}

summarise(85.50, 18, 3);