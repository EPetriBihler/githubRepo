sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (sStatus) {
			if(sStatus == true){
				return 'On';
			} else {
				return 'Off';
			}
		},
		statusColor: function (sStatus) {
			if(sStatus == true){
				return 'Good';
			} else {
				return 'Error';
			}
		},
		bihlerText: function (sExtension){
				//var test = 'ExtensionObject{encoded=ByteString{bytes=[4, 0, 0, 0, 49, 48, 49, 55, -12, 97, -110, 65, 61, 24, -44, 1, 0, 3, 2, 0, 0, 0, 100, 101, 54, 0, 0, 0, 65, 49, 45, 77, 49, 32, 68, 105, 114, 101, 107, 116, 97, 110, 116, 114, 105, 101, 98, 32, 45, 32, 78, 99, 45, 65, 49, 45, 77, 49, 44, 32, 65, 49, 32, 32, 45, 32, 65, 49, 32, 68, 105, 114, 101, 107, 116, 97, 110, 116, 114, 105, 101, 98, 3, 2, 0, 0, 0, 100, 101, 26, 0, 0, 0, 81, 117, 105, 99, 107, 115, 116, 111, 112, 45, 69, 105, 110, 103, 97, 110, 103, 32, 97, 107, 116, 105, 118, 32, 32, 32, 2, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0]}, encodingTypeId=NodeId{ns=2, id=5003}}';
				// UTF8 Encoded Unicode String
				var stringarray = sExtension.split('[')[1].split(']')[0];
				var uint8Arr = $.parseJSON('[' + stringarray + ']');
				var string = String.fromCharCode.apply(null, uint8Arr);
				var split = string.split(String.fromCharCode.apply(null, [0]));
				var returnstring = "";
				var i = 0;
				split.forEach(function(element) {
				  if(element.length > 2)
				  {
				  	if(returnstring.length>0){
						returnstring = returnstring + " - ";
					}
					if(i===0){
						returnstring = element.substring(0,4);
					} else {
				  	returnstring = returnstring + element;
					}
					i++;
				  }
				});
				return returnstring.replace(/[^ -~]+/g, "");
		}
	};
});