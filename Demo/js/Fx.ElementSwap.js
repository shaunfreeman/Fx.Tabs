/*
---
name: Fx.ElementSwap.js
description: Slide show interface for classes.
authors: Shaun Freeman
requires:
    fx_morphelement/1.0.3:
    - Fx.MorphElement
    - Fx.MorphElement.Effects
    elementswap/1.0.1:
    - ElementSwap
provides: [Fx.ElementSwap]
license: MIT-style license
version: 1.0.2
...
*/

Fx.ElementSwap = new Class ({
	
	Extends: ElementSwap,
 
	options: {
		TransitionFx: {
			transition: 'linear',
			duration: 'long',
			onStart: function() {
				this.element.setStyle('overflow', 'hidden');
			},
			onComplete: function() {
				this.element.setStyle('overflow', 'auto');
			}
		},
		showFx: 'slide:right',
		hideFx: 'slide:left',
		wait: true
	},
	
	firstRun: true,
	
	initialize: function(elements, options) {
		this.setOptions(options);
		
		this.slides = $$(elements);
		
		this.wrap = new Element('div', {
			'id': this.options.panelWrap,
			'class': this.options.panelWrapClass
		}).inject(this.slides[0], 'before').adopt(this.slides);
		
		this.attachFx(this.slides);
		
		this.activate(this.options.activateOnLoad);
		
		if (this.options.autoPlay) this.start();
	},
	
	attachFx: function(elements) {
		$$(elements).each(function(el) {
			el.get('morphElement', {
				wrap: false,
				width: document.id(this.options.panelWrap).getStyle('width'),
				height: document.id(this.options.panelWrap).getStyle('height'),
				FxTransition: this.options.TransitionFx,
				hideOnInitialize: this.options.hideFx
			});
		}, this);
		return this;
	},
	
	activate: function(index) {
		if ($type(index) == 'string') index = this.slides.indexOf(this.slides.filter('[id='+index+']')[0]);
		if ($type(index) != 'number') return;
		// panel fx here..
		if (this.firstRun) {
			this.show(index);
			this.firstRun = false;
		} else {
			if (this.options.wait) {
				this.getFx('hideFx').chain(
					function() {
						this.show(index);
					}.bind(this)
				);
			} else {
				this.getFx('hideFx');
				this.show(index);
			}
		}
	},
	
	show: function(index) {
		this.parent(index);
		this.getFx('showFx');
	},
	
	getFx: function(fx) {
		this.effect = this.slides[this.now].retrieve('morphElement');
		return this.effect.start(this.options[fx]);
	},
	
	changeFx: function(elements, fx) {
		if (elements == 'all') elements = this.slides;
		fx = {
			FxTransition: fx,
			hideOnInitialize: false
		};
		$$(elements).each(function(el) {
			var flag = el.retrieve('fxEffect:flag');
			opts = el.retrieve('morphElement:options');
			el.eliminate('fxEffect:flag').eliminate('morphElement');
			el.get('morphElement', $merge(opts, fx));
		}, this);
		this.slides[this.now].store('fxEffect:flag', 'hide');
	}
	
});

Element.implement({

	fxSwap: function(options) {
		return new Fx.ElementSwap(this.getChildren(),options);
	}

});