//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billString element
var billStringField = document.querySelector(".billString");
//get a reference to the billTotal
var billTotalElement = document.querySelector(".billTotal");

var calculateInstance = calculateBill()
//create the function that will be called when the calculate button is pressed
function calculateBtnClicked(){
    var type = billStringField.value;
    
    // var billItems = billString.split(",");
    // var billTotal = 0;
    // for (var i=0;i<billItems.length;i++){
    //     var billItem = billItems[i].trim();
        // if (billItem === "call"){
        //     billTotal += 2.75;
        // } else if (billItem === "sms"){
        //     billTotal += 0.75;
        // } 
        //calculateInstance.addTotal(type)
        //var roundedBillTotal = calculateInstance.addTotal(billString)
        billTotalElement.innerHTML = calculateInstance.addTotal(type).toFixed(2);
       // billTotalElement.innerHTML = roundedBillTotal;
        //alert(calculateInstance.classTotalName())
        billTotalElement.classList.add(calculateInstance.classTotalName(type))
    
      
        // colour(roundedBillTotal);

        // var colour = function (roundedBillTotal)
                
        // if (roundedBillTotal < 20){
        //     billTotalElement.classList.remove("warning");
        //     billTotalElement.classList.remove("danger")
        // }
    //  else if ( roundedBillTotal >= 20 && roundedBillTotal < 30.00) {
        billTotalElement.classList.remove("danger");
        billTotalElement.classList.remove("warning");
      
    // } else if( roundedBillTotal >= 30.00){
    // billTotalElement.classList.remove("warning");
    billTotalElement.classList.add(calculateInstance.classTotalName(type));
       //billTotalElement.classList.add("danger");
    // } 
}
 

//link the function to a click event on the calculate button
calculateBtn.addEventListener('click', calculateBtnClicked);
