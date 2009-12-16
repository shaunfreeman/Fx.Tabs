MorphTabs - an advanced Tab swapper
====================================

MorphTabs is a complete clone of mooTabs by [silverscripting](http://www.silverscripting.com/mootabs/). I have updated it for mootools 1.2 and it will not work with mootool 1.11 and below.

I have also added some new effects which I hope you all will like!

Because MorphTabs is based heaverly on mootabs some of the options and documentation is the same, but there are some important changes to note.

![Screenshot](http://github.com/vincentbluff/MorphTabs/raw/master/screenshot.png)

Requirements
------------

* [MooTools Core 1.2](http://mootools.net/core): Selectors, DomReady, Fx.Morph, Fx.Transitions HTML.Request (and their dependencies)

How to use
----------

### Syntax
	new MorphTabs('element_id', {options});

### Arguments

1. element_id - (*element*) the id of the main div container.
2. options - (*options*) a key/value set of options.

### Options
* width: (*string*), the width of the main DIV container. Changed as a string so you can use "200px" or "200%" if you want. (Default: '300px')
* height: (*string*), the height of the main DIV container. Not recommended to use a % height here as it will most likely come out ugly (Default: '200px')
* changeTransition: An Fx.Transitions object. see mootools Fx for options. (Default: {transition: 'linear', duration, 'long'})
* panelStartFx: (*string*), the type of effect when transition starts. (Default: 'blind:left') Can any one of:

	* blind:up
	* blind:down
	* blind:left
	* blind:right
	* slide:up
	* slide:down
	* slide:left
	* slide:right
	* fade
    * appear

* panelEndFx: (*string*), same as panelStartFx but for the type of effect when transition ends. See panelStartFx for options (Default: 'blind:right')
* mouseOverClass: (*string*), The CSS Class name you want to use when a tab is mousedover (Default: 'over')
* activateOnLoad: (*string*), can be set to 'first' to activate the first tab on load, 'none' to leave all the tabs hidden on load, or any tab's title to activate this tab on load (Default: 'first')
* activateTabFunction: (*function*), the function to call when a tab is activated, useful to execute any javascript events. It takes one argument which is the tab id. (Default: empty function)
* evalScripts: (*boolean*), whether to execute any javascript in the panel div or not. (Default: false)
* useAjax: (*boolean*), Whether you want to use Ajax to retrive tab content or not. (Default: false)
* ajaxUrl: (*string*), The url of the server-side script to use. (Default: '')
* ajaxOptions: (*object*), The object containing the options for the Ajax request (Default: {method:'get', evalScripts: true})
* ajaxLoadingText: (*string*), The text to show while content is loading (Default: 'Loading...').

### Example

###The JavaScript part

	#JS
	window.addEvent('domready', function() {
        var morphTabs = new MorphTabs('id_of_container', {options});
});

###The XHTML part

	#HTML
	<div id="id_of_container">
		<!-- tab headings -->
		<ul class="morphtabs_title">
			<li title="Tab1">Tab1</li>
			<li title="Tab2">Tab2</li>
			<li title="Tab3">Tab3</li>
		</ul>
		<!-- Tab 1 content -->
		<div id="Tab1" class="morphtabs_panel">
			Tab 1 content   
		</div>
		<!-- Tab2 content -->
		<div id="Tab2" class="morphtabs_panel">
			Tab 2 content   
			</div>
			<!-- Tab 3 content -->
			<div id="Tab3" class="morphtabs_panel">
			Tab 3 content   
		</div>
	</div>

###The CSS part
Customizing the look of the tabs require a certain knowledge of CSS. What I would suggest is to look at the examples of tabs in the the Demo folder, they each use a different CSS file that you can download and they should be a good starting point.

Some important classes to keep in mind:

* morphtabs_title: the base class for the unordered list, not much to do here
* morphtabs_title li: the class for the li elements of the unordered list, this one is fun to mess with...
* morphtabs_title li.active: the class for the currently active tab, again, have fun with this one...
* morphtabs_title li.over: the class for the mouseover effect, again, have fun with this one....
* morphtabs_panelwrap: the class for the panelwrap, which allows for certain effects to display correctly. Becareful with this one as messing with the default setup might give some unexpected results!
* morphtabs_panel: the class for the panel divs. Feel free to mess with the colors, font etc..

In most cases, you can play with the fonts and colors without any consequences, but if you start messing with the position, display, height, etc.. I can't guarantee that the result will look good (or that it will work at all!). This is why I would suggest you to read up a bit on CSS if you are new to it, before you start styling the tabs.

###A note on using AJAX:

If you wish to use Ajax, please leave the method to GET and don't change the "update" option. Also, feel free to use a cool ajax spinner image in the ajaxLoadingText if you want, it can take HTML...