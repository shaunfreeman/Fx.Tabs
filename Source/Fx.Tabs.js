/*
---
name: Fx.Tabs.js
description: Handles the scripting for a common UI layout; the tabbed box.
authors: Shaun Freeman
license: MIT-style
requires:
    core:1.2
    - Selectors
    - DomReady
    - Fx.Morph
    - Fx.Transitions
provides: [Fx.Tabs]
version: 2.0
...
*/

Fx.Tabs = new Class({
	
	Extends: Tabs,
	
	firstRun: true,
	
	getSwap: function() {
		this.elSwap = new Fx.ElementSwap(this.options.panels, this.options.elementSwapOptions).addEvent('onActive', this.showTab.bindWithEvent(this));
	},
	
	activateTab: function(index) {
		this.showTab(index);
		if (this.firstRun) return this.firstRun = false;
		this.elSwap.activate(index);
	}
	
});
