ContextMenu
=========

ContextMenu is a highly customizable, compact context menu script written with CSS, XHTML, and the MooTools javascript framework. ContextMenu allows you to offer stylish, functional context menus on your website.

![Screenshot](http://davidwalsh.name/dw-content/dw-context.jpg)

How to Use
----------

ContextMenu can be initialized at any time but is generally initialized at the top of the document during the page's normal load.  There are no required arguments -- only options.

	#JS
	var context = new ContextMenu({
		targets: 'a', //menu only available on links
		menu: 'contextmenu',
		actions: {
			copy: function(element,ref) { //copy action changes the element's color to green and disables the menu
				element.setStyle('color','#090');
				ref.disable();
			}
		},
		offsets: { x:2, y:2 }
	});
	

For specific usage and options, please read the documentation or visit http://davidwalsh.name/mootools-context-menu