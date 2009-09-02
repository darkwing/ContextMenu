ContextMenu
=========

ContextMenu is a highly customizable, compact context menu script written with CSS, XHTML, and the MooTools javascript framework. ContextMenu allows you to offer stylish, functional context menus on your website.

![Screenshot](http://davidwalsh.name/dw-content/dw-context.jpg)

How to Use
----------

ContextMenu can be initialized at any time but is generally initialized at the top of the document during the page's normal load.  There are no required arguments -- only options.
	
### HTML
	<ul id="contextmenu">
		<li><a href="#edit" class="edit">Edit</a></li>
		<li class="separator"><a href="#cut" class="cut">Cut</a></li>
		<li><a href="#copy" class="copy">Copy</a></li>
		<li><a href="#paste" class="paste">Paste</a></li>
		<li><a href="#delete" class="delete">Delete</a></li>
		<li class="separator"><a href="#quit" class="quit">Quit</a></li>
	</ul>
	
### Javascript
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