// get a reference to the sms or call radio buttons
var radio = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn")
//create a variable that will keep track of the total bill
// var callTotal2 = 0;
//  var smsTotal2 = 0;

 var callTotalTwo = document.querySelector(".callTotalTwo")
 var smsTotalTwo = document.querySelector(".smsTotalTwo")
 var totalTwo = document.querySelector(".totalTwo")

 var radioInstance = radioBill()

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function checkedRadioBtn(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    var billItemType = checkedRadioBtn.value;

    if(billItemType){
     radioInstance.addTotal(billItemType)
    }
    // if (billItemType === "call"){
    //     callTotal2 += 2.75
    // 
    // else if (billItemType === "sms"){
    //     smsTotal2 += 0.75;
    // }
    callTotalTwo.innerHTML = radioInstance.getCallTotal().toFixed(2);
    smsTotalTwo.innerHTML = radioInstance.getSmsTotal().toFixed(2);
    // var totalCost = callTotal2 + smsTotal2;
    totalTwo.innerHTML = radioInstance.totalCost().toFixed(2);
//    alert(radioInstance.classNameTotal())
    totalTwo.classList.add(radioInstance.classNameTotal())
    
    // colour(totalCost);
    // radioInstance.classNameTotal();
//     if (totalCost <= 20.00){
//         totalTwo.classList.remove("warning");
//         totalTwo.classList.remove("danger")
//     }
// else if ( totalCost > 30.00 && totalCost <= 50.00) {
//     totalTwo.classList.add("warning");
// } else if( totalCost > 50.00) {
//     totalTwo.classList.remove("warning");``
//     totalTwo.classList.add('danger');
// }
}

 
// var colour = function (totalCost) {
    


//  if (totalCost >= 30 && total < 50) {
//     totalTwo.classList.add("warning");
//  }
// else if (totalCost >= 50){
//     totalOne.classList.add("danger");
// }
radioBillAddBtn.addEventListener('click',checkedRadioBtn);