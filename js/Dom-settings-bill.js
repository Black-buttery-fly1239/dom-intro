//get a reference to the sms or call radio buttons
var radio = document.querySelector(".billItemTypeWithSettings");

//total
var callTotalSet = document.querySelector(".callTotalSettings")
var smsTotalSet = document.querySelector(".smsTotalSettings")
var totalSet = document.querySelector(".totalSettings")
// get refences to all the settings fields
var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
//get a reference to the add button
var billSettingBtn = document.querySelector(".billSettingBtn")
//get a reference to the 'Update settings' button
var updateSettingsBtn = document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings
// var callCostsettingUp = 0;
// var smsCostSettingUp = 0;
// var warningLevelsSettingUP = 0;
// var criticalLevelsSettingUP = 0;
var settingInstance = BillWithSettings()
console.log(settingInstance);
// var settingBill= settingBill();
// create a variables that will keep track of all three totals.
// var callTotal= 0;
// var smsTotal = 0;
// var totalCost = 0;
//add an event listener for when the 'Update settings' button is pressed
updateSettingsBtn.addEventListener('click',function(){
    settingInstance.setCallCost(Number(callCostSetting.value));
    settingInstance.setSmsCost(Number(smsCostSetting.value));
    settingInstance.setWarningLevel(warningLevelSetting.value);
    settingInstance.setCriticalLevel(criticalLevelSetting.value);
    settingInstance.getCallCost();
    settingInstance.getSmsCost();
    settingInstance.getWarningLevel();
    settingInstance.getCriticalLevel();
    settingInstance.hasReachedCriticalLevel();
    // if (callCostSetting.value&& smsCostSetting.value){
// callCostSettingUp = callCostSetting.value;
// smsCostSettingUp = smsCostSetting.value;
// warningLevelsSettingUP = warningLevelSetting.value;
// criticalLevelsSettingUP = criticalLevelSetting.value;
// function(value)
colour();
// totalSet.classList.remove("warning");
//  totalSet.classList.remove("danger");
    
});
//add an event listener for when the add button is pressed
billSettingBtn.addEventListener('click', function(){
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

    var tickTockBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (tickTockBtn){
       
            // callTotal =+ 0;
        
    var  billItemTypeWithSettings = tickTockBtn.value;
     settingInstance.checkTotal(billItemTypeWithSettings);
     
    // if (billItemTypeWithSettings === "call" && totalCost < parseFloat(criticalLevelSetting.value)){
    //     callTotal += parseFloat(callCostSetting.value);
    // }
    // else if (billItemTypeWithSettings === "sms" && totalCost < parseFloat(criticalLevelSetting.value)) {
    //     smsTotal += parseFloat(smsCostSetting.value);
    // } 
    // else {
    //     callTotal+= 0;
    //     smsTotal+= 0;
    // }

   
   
    // console.log(tickTockBtn);



//   else if (billItemTypeWithSettings ==="sms" && smsCostSetting.value == ""){
//     //   smsTotal =+ 0;
//   }

//display totals
callTotalSet.innerHTML = (settingInstance.getTotalCallCost()).toFixed(2);
smsTotalSet.innerHTML = (settingInstance.getTotalSmsCost()).toFixed(2);
// totalCost = callTotal + smsTotal;
totalSet.innerHTML = (settingInstance.getTotalCost()).toFixed(2);
colour();
    }
});

//     if (billItemTypeWithSettings == "call" && callCostSetting.value = ""  ){
//     callTotal = 0;
//       }
//    if (billItemTypeWithSettings == "sms" && smsCostSetting.value = ""){
//       smsTotal = 0;
//   }

//change colours
var colour = function(totalCost){
    totalSet.classList.remove("warning");
    totalSet.classList.remove("danger");
totalSet.classList.add(settingInstance.totalClassName())
    // if (totalCost < parseFloat(warningLevelSetting.value)){
    //     totalSet.classList.remove("warning")
    //     totalSet.classList.remove("danger")
    // }
    // else if (totalCost >= parseFloat(warningLevelSetting.value) && totalCost < parseFloat(criticalLevelSetting.value)) {
    //     totalSet.classList.remove("danger")
    //     totalSet.classList.add("warning");
    // }
    // else if (totalCost >= parseFloat(criticalLevelSetting.value)) {
    //     totalSet.classList.remove("warning")
    //     totalSet.classList.add("danger");
            // totalSet.classList.remove("danger");
            // totalSet.classList.add('danger');
        

    // }
};
 
// fuction(value) {
//     if (callingSeting.value === Nan) {
//         callTotal += 0;
//     }
    
//}
//  var itemChecked = document.querySelector("input[name='billItemTypewithSetting'].checked")
//     if (itemChecked){
//         var checkedItem = itemchecked.value;
//     }
//     //.calc(checkedItem);
//     var callTotalSet = settingBill.getCallTotal();
//     var smsTotalSet = settingBill.getSmsTotal();
//     var totalSet = settingBill.getTotalCost();

//  }
