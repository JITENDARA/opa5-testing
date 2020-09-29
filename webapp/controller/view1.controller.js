sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("kill.zvaksss.controller.view1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf kill.zvaksss.view.view1
		 */
		onInit: function () {
            var oModel = new sap.ui.model.json.JSONModel();
             oModel.setData({
             	"ProdSet" : {
             		"Vbeln" : "",
             		"Erdat" : "",
             		"Vbtyp" : "E",
             		"Auart" : "YALZ",
             		"Netwr" : "100.00",
             		"Waerk" : "EUR",
             		"Vkorg" : "1710",
             		"Kunnr" : "A-6002"
             	}
             	 });
             this.getView().setModel(oModel,"local");
		},
		onAddSale : function(){
		  var oModel = this.getView().getModel();
		  var mNewEntry = {};
		  mNewEntry.Vbeln = this.getView().byId("idVbeln").getValue(); 
		  mNewEntry.Erdat = this.getView().byId("idErdat").getDateValue();
		  mNewEntry.Vbtyp = this.getView().byId("idVbtyp").getValue();
		  mNewEntry.Auart = this.getView().byId("idAuart").getValue();
		  mNewEntry.Netwr = this.getView().byId("idNetwr").getValue();
		  mNewEntry.Waerk = this.getView().byId("idWaerk").getValue();
		  mNewEntry.Vkorg = this.getView().byId("idVkorg").getValue();
		  mNewEntry.Kunnr = this.getView().byId("idKunnr").getValue();
		  
		  oModel.create("/saleSet",mNewEntry,{
		  	method : "POST",
		  success : function(){
		  var oMessage = new sap.m.MessageBox.success("Record is inserted into the data Base");	
		  	return oMessage;
		  },
		  error : function(oError){
		  	var oMessge = new sap.m.MessageBox.error("Error occured during inserting data into data base");
		  	return oMessge;
		  }
		  });		
			
			
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf kill.zvaksss.view.view1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf kill.zvaksss.view.view1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf kill.zvaksss.view.view1
		 */
		//	onExit: function() {
		//
		//	}

	});

});