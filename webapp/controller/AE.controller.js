sap.ui.define([
	"sap/iot/ain/lib/reusable/view/SectionBaseController",
	"sap/iot/ain/manageequipments/manageequipmentsDashboard/model/models",
	"sap/iot/ain/manageequipments/manageequipmentsDashboard/model/formatter"
], function(Controller,Model,  Formatter) {
	"use strict";

	return Controller.extend("sap.iot.ain.manageequipments.manageequipmentsDashboard.controller.AE", {
	formatter: Formatter,
		thingType: 'ottobihler.iotdev.de.bihler.iot.machines:DemoMachinespeed',
		thingSpeed1: '88918FF6AEF54C94A8C32B38E9025902',
		thingProduction: 'C9CDE8ED6A364689B8A52B58BD2F69ED',
		thingSpeed: '4ECCB4F6EBBE450981BC9F026E566999',
		thingMessage: '47517B892E8C4E1FA6DC1185F049214C',
		onAfterRendering : function() {
//		renderSection : function() {
			this.timeseriesModel = Model.createTimeseriesModel();
			this.dashboardModel = Model.createDashboardModel();
			this.tableModel = Model.createTableModel();
			this.getView().setModel(this.dashboardModel, 'dashboardModel');
			this.getView().setModel(this.tableModel, 'tableModel');
	
			var that = this;
			this.timeseriesModel.attachRequestCompleted(function() {
				var results = that.timeseriesModel.getData().value;
				if (results[0]['BooleanValue'] || results[0]['BooleanValue']===false) {
					that.dashboardModel.setProperty('/inProduction', results[0]['BooleanValue']);
				} else if (results[0]['IntegerValue'] || results[0]['IntegerValue']===0) {
						that.dashboardModel.setProperty('/machinespeed', results[0]['IntegerValue']);
				} else if (results[0]['Name']){
					that.dashboardModel.setProperty('/name', results[0]['Name']);
					that.dashboardModel.setProperty('/type', results[0]['Type']);
				} else if (results[0]['StringValue']){
					that.tableModel.setData(that.timeseriesModel.getData()); 
				}
			});

			this._readTimeseriesService(this.thingProduction, 'BooleanValue', 1);
			this._readTimeseriesService(this.thingSpeed1, 'IntegerValue', 1);
	//		this._readTimeseriesService(this.thingSpeed, 'IntegerValue', 1);
	//		this._readTimeseriesService(this.thingSpeed, 'Default', 1);
			this._readTimeseriesService(this.thingMessage, 'StringValue', 100);

			setInterval(function() {
				that._readTimeseriesService(that.thingProduction, 'BooleanValue', 1);
				that._readTimeseriesService(that.thingSpeed1, 'IntegerValue', 1);
			}, 2500);

		},
		_readTimeseriesService: function(sThingId, sPropertySet, top) {
			var that = this;
			that.timeseriesModel.loadData("/backend/Things('" + sThingId + "')" + "/" + that.thingType + "/" + sPropertySet + "?timerange=90D&$top=" + top);
		}

	});
});