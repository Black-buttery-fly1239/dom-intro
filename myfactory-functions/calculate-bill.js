function calculateBill() {



    function addTotal(type) {
        var billTotal = 0;


        var billItems = type.split(",");

        for (var i = 0; i < billItems.length; i++) {
            var billItem = billItems[i].trim();
            if (billItem === "call") {
                billTotal += 2.75
            }
            else if (billItem === "sms") {
                billTotal += 0.75
            }



        }
        return billTotal

    }
    function classTotalName(type) {
        if (addTotal(type) >= 20.00 & addTotal(type) < 30.00) {
            return "warning"
        }
        if (addTotal(type) >= 30.00) {
            return "danger"
        }
    }
    return {
        addTotal,
        classTotalName,
    }
}