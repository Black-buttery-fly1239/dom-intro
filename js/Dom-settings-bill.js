
var radio = document.querySelector(".billItemTypeWithSettings");
var callTotalSet = document.querySelector(".callTotalSettings")
var smsTotalSet = document.querySelector(".smsTotalSettings")
var totalSet = document.querySelector(".totalSettings")

var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");

var billSettingBtn = document.querySelector(".billSettingBtn")

var updateSettingsBtn = document.querySelector(".updateSettings")

var settingInstance = BillWithSettings()
console.log(settingInstance);

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

colour();

    
});

billSettingBtn.addEventListener('click', function(){

    var tickTockBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (tickTockBtn){
       
        
        
    var  billItemTypeWithSettings = tickTockBtn.value;
     settingInstance.checkTotal(billItemTypeWithSettings);
     


callTotalSet.innerHTML = (settingInstance.getTotalCallCost()).toFixed(2);
smsTotalSet.innerHTML = (settingInstance.getTotalSmsCost()).toFixed(2);

totalSet.innerHTML = (settingInstance.getTotalCost()).toFixed(2);
colour();
    }
});

var colour = function(totalCost){
    totalSet.classList.remove("warning");
    totalSet.classList.remove("danger");
totalSet.classList.add(settingInstance.totalClassName())

};
 
