/** @namespace nl */
/** @namespace nl.barrydam */
/** @namespace nl.barrydam.m */
sap.ui.define([], function() {
        'use strict';
        
        /**
		 * Touch events on IconTabBar and Chrome 55
		 * 
		 * This class adds fixes the Chrome 55+ PointerEvents bug for sap.m.IconTabBar
		 * The newly introduced PointerEvents and touchevents aren't fired correctly
		 * 
		 * @class 		
		 * @alias 		nl.barrydam.m.IconTabBar
		 * @extends 	sap.m.IconTabBar
		 * 
		 * @constructor
		 * @public
		 */
         var oExtend = sap.m.IconTabBar.extend('nl.barrydam.m.IconTabBar', {
         	renderer: "sap.m.IconTabBarRenderer"
         });
         
        if (sap.ui.Device.browser.name === sap.ui.Device.browser.BROWSER.CHROME && sap.ui.Device.browser.version >= 55) {
			oExtend.prototype.onAfterRendering = function() {
				var	that	= this,
					aItems	= this.getItems();
				for (var i in aItems) {
					if (aItems[i] instanceof sap.m.IconTabFilter === false) { continue; }
					(function () { // private scope else the oIconTabFilter in the addEventListener will be overwritten each loop
						var oIconTabFilter	= aItems[i],
							oDomRef 		= oIconTabFilter.getDomRef();
						if(oDomRef !== null) { 
							oDomRef.addEventListener("pointerdown", function() {
								that.setSelectedItem(oIconTabFilter);
							});
						}
					}());
				}
	        };
		}
        
        return oExtend;
}, true);