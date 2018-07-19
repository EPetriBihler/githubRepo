jQuery.sap.declare("sap.iot.ain.manageequipments.manageequipmentsDashboard.blocks.block");
jQuery.sap.require("sap.uxap.BlockBase");

sap.uxap.BlockBase.extend("sap.iot.ain.manageequipments.manageequipmentsDashboard.blocks.block",{
    metadata:{
        views:{
            Expanded:{
                viewName:"sap.iot.ain.manageequipments.manageequipmentsDashboard.view.AE",
                type: "XML"
            },
            Collapsed:{
                viewName:"sap.iot.ain.manageequipments.manageequipmentsDashboard.view.AE",
                type: "XML"
            }
        }
    }
}); 