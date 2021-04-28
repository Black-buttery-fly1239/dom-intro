var radio = document.querySelector(".billItemTypeRadio");
var radioBillAddBtn = document.querySelector(".radioBillAddBtn")


 var callTotalTwo = document.querySelector(".callTotalTwo")
 var smsTotalTwo = document.querySelector(".smsTotalTwo")
 var totalTwo = document.querySelector(".totalTwo")

 var radioInstance = radioBill()

function checkedRadioBtn(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    var billItemType = checkedRadioBtn.value;

    if(billItemType){
     radioInstance.addTotal(billItemType)
    }
  
    callTotalTwo.innerHTML = radioInstance.getCallTotal().toFixed(2);
    smsTotalTwo.innerHTML = radioInstance.getSmsTotal().toFixed(2);
    totalTwo.innerHTML = radioInstance.totalCost().toFixed(2);
  
    totalTwo.classList.add(radioInstance.classNameTotal())
    
}

 
radioBillAddBtn.addEventListener('click',checkedRadioBtn);