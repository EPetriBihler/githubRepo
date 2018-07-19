jQuery.sap.declare("sap.iot.ain.manageequipments.manageequipmentsDashboard.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "sap.iot.ain.manageequipments",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on cloud
	url: jQuery.sap.getModulePath("sap.iot.ain.manageequipments.manageequipmentsDashboard") + "/parent"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});

this.sap.iot.ain.manageequipments.Component.extend("sap.iot.ain.manageequipments.manageequipmentsDashboard.Component", {
	metadata: {
		manifest: "json"
	}
});