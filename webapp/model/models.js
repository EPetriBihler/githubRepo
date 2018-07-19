sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createTimeseriesModel : function(){
			var oModel = new JSONModel();
			return oModel;
		},
			createDashboardModel : function(){
			var oModel = new JSONModel();
			return oModel;
		},
			createTableModel : function(){
			var oModel = new JSONModel();
			return oModel;
		}

	};
});