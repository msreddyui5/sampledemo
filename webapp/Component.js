jQuery.sap.declare("com.sapsampledemo.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
jQuery.sap.require("sap.ui.generic.app.AppComponent");

sap.ui.generic.app.AppComponent.extend("com.sapsampledemo.Component", {
	metadata: {
		"manifest": "json"
	}
});