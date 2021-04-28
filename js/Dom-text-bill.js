var billTypeText = document.querySelector(".billTypeText")
var addToBillBtn = document.querySelector(".addToBillBtn")



var callTotalOne = document.querySelector(".callTotalOne")
var smsTotalOne = document.querySelector(".smsTotalOne")
var totalOne = document.querySelector(".totalOne")
var textInstance = textBill()


function textBillTotal(){
    
    var billTypeEntered = billTypeText.value.trim();
    if(billTypeEntered){
        textInstance.addTotal(billTypeEntered)
       }
    
   
    callTotalOne.innerHTML = textInstance.getCallTotal().toFixed(2);
    smsTotalOne.innerHTML = textInstance.getSmsTotal().toFixed(2);
    totalOne.innerHTML = textInstance.totalOne().toFixed(2);
    totalOne.classList.remove("warning")
    totalOne.classList.remove("danger")
    totalOne.classList.add(textInstance.classTotal())
  

   
}


addToBillBtn.addEventListener('click', textBillTotal);



