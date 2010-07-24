Fx.Tabs - An Advanced Tab Swapper
=================================

Fx.Tabs is the new name for MorphTabs.

Fx.Tabs is a complete clone of mooTabs by [silverscripting](http://www.silverscripting.com/mootabs/). I have updated it for mootools 1.2.4 and it will not work with mootool 1.11 and below.

I have also added some new effects which I hope you all will like!

Because Fx.Tabs is based heaverly on mootabs some of the options and documentation is the same, but there are some important changes to note.

Inherits methods, properties, options and events from [Tabs][].

![Screenshot](http://github.com/vincentbluff/Fx.Tabs/raw/master/screenshot.png)

[jsFiddle Demo](http://jsfiddle.net/ctJpJ/3/)

###Extends
* [Tabs][]

Requirements
------------

* [MooTools Core 1.2.4](http://mootools.net/core): Element.Event, Selectors, DomReady, Fx.Morph, Fx.Transitions and their dependencies
* [fx.MorphElement][] and its dependencies
* [ElementSwap][] and its dependencies
* [Fx.ElementSwap][] and its dependencies
* [Tabs][] and its dependencies

How to use
----------

### Syntax
	new Fx.Tabs([options]);

### Arguments

1. options - (*object*, optional) An object with options. See:
	- [Tabs][]
	- [Fx.ElementSwap][]
	- [ElementSwap][]
	- [fx.MorphElement][]
for all available options.

### Example

### The JavaScript part

	#JS
	window.addEvent('domready', function() {
		var fxTabs = new Fx.Tabs();
	});

### The XHTML part

	#HTML
	<div id="tabs">

		<!-- tab headings -->

		<ul class="tabs_title">
			<li title="my_work">My Work</li>
			<li title="about_me">About Me</li>

			<li title="contact">Contact</li>
		</ul>

			
		<!-- Tab1 content -->

		<div id="my_work" class="tabs_panel">
			<h1>Tab 1</h1>
			<p>content</p>
		</div>

		<!-- Tab2 content -->

		<div id="about_me" class="tabs_panel">
			<h1>Tab 2</h1>
			<p>content</p>
		</div>
			
		<!-- Tab3 content -->

		<div id="contact" class="tabs_panel">
			<h1>Tab 3</h1>
			<p>content</p>
		</div>
	
	</div>

###The CSS part

Customizing the look of the tabs require a certain knowledge of CSS. What I would suggest is to look at the examples of tabs in the the Demo folder, they should be a good starting point.

#### Example

	#CSS
	#tabs {
	position:relative;
	width:300px;
	height:200px;
	overflow:hidden;
	}
	
	.tabs_title {
		list-style-image: none;
		list-style-type: none;
		margin: 0px;
		padding: 0px;
		height: 24px;
	}
	
	.tabs_title li {
		float: left;
		background-color: #3975BD;
		padding: 2px 8px 2px 8px;
		margin-right: 2px;
		cursor: pointer;
		color: #fff;
		font-family: "Trebuchet MS";
		font-size: 12px;
		height: 24px;
		line-height: 24px;
	}
	
	.tabs_title a {
		text-decoration:none;
		color: #fff;
	}
	
	.tabs_title li.over {
		font-weight: bold;
	}
	
	.tabs_title li.active {
		background-color: #49A8EC;
	}
	
	.tabs_panelwrap {
		position: absolute;
		top:28px;
		overflow: hidden;
		width:300px;
		height:172px;
	}
	
	.tabs_panel {
		/*position:absolute;
		top:28px;*/
		width:300px;
		height:172px;
		display:none;
		overflow: auto;
		background-color: #49A8EC;
		color: #fff;
		clear: both;
	}
	
	.tabs_panel.active {
		display: block;
	}
	
	.tabs_panel p {
		margin-left:5px;
	}

The styling is completly left to you this is why I would suggest you to read up a bit on CSS if you are new to it, before you start styling the tabs.

[$$]: http://www.mootools.net/docs/core/Element/Element#dollars
[ElementSwap]: http://www.mootools.net/forge/p/elementswap
[Fx.ElementSwap]: http://www.mootools.net/forge/p/fx_elementswap
[Tabs]: http://www.mootools.net/forge/p/tabs
[Fx.MorphElement]: http://www.mootools.net/forge/p/fx_morphelement