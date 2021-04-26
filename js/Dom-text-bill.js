// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText")
//get a reference to the add button
var addToBillBtn = document.querySelector(".addToBillBtn")

//create a variable that will keep track of the total bill
// var callTotal1 = 0;
// var smsTotal1 = 0;

var callTotalOne = document.querySelector(".callTotalOne")
var smsTotalOne = document.querySelector(".smsTotalOne")
var totalOne = document.querySelector(".totalOne")
var textInstance = textBill()

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    if(billTypeEntered){
        textInstance.addTotal(billTypeEntered)
       }
    // update the correct total
    // if (billTypeEntered === "call"){
    //     callTotal1 += 2.75
    // }
    // else if (billTypeEntered === "sms"){
    //     smsTotal1 += 0.75;
    // }
    
    //update the totals that is displayed on the screen.
    callTotalOne.innerHTML = textInstance.getCallTotal().toFixed(2);
    smsTotalOne.innerHTML = textInstance.getSmsTotal().toFixed(2);
    // var totalCost = callTotal1 + smsTotal1;
    totalOne.innerHTML = textInstance.totalOne().toFixed(2);
    totalOne.classList.remove("warning")
    totalOne.classList.remove("danger")
    alert(textInstance.classTotal())
    totalOne.classList.add(textInstance.classTotal())
  
 //color the total based on the criteria
//  if (totalCost >= 30 && totalCost < 50){
//     totalOne.classList.add("warning")
 
//     // adding the danger class will make the text red
   
}
// else if (totalCost >= 50){
//     totalOne.classList.add("danger");
// }

// }

addToBillBtn.addEventListener('click', textBillTotal);

// function textBillTotal(){

    // ... other code here
    
    //update the totals that is displayed on the screen.
    // callsTotalElem.innerHTML = callsTotal.toFixed(2);
    // smsTotalElem.innerHTML = smsTotal.toFixed(2);
    // var totalCost = callsTotal + smsTotal;
    // totalCostElem.innerHTML = totalCost.toFixed(2);
    
   
// }

