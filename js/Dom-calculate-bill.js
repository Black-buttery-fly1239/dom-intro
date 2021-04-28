var calculateBtn = document.querySelector(".calculateBtn");
var billStringField = document.querySelector(".billString");
var billTotalElement = document.querySelector(".billTotal");

var calculateInstance = calculateBill()

function calculateBtnClicked(){
    var type = billStringField.value;
        billTotalElement.innerHTML = calculateInstance.addTotal(type).toFixed(2);
        billTotalElement.classList.add(calculateInstance.classTotalName(type))
    
        billTotalElement.classList.remove("danger");
        billTotalElement.classList.remove("warning");
      
    
    billTotalElement.classList.add(calculateInstance.classTotalName(type));
   
}
 

//link the function to a click event on the calculate button
calculateBtn.addEventListener('click', calculateBtnClicked);
