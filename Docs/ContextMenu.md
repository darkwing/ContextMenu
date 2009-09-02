


Class: ContextMenu
=============================

### Implements:

Options, Events


ContextMenu Method: constructor {#ContextMenu:constructor}
-------------------------------------------------------

### Notes:

- *ContextMenu* debuted Thursday, January 29, 2009 on the David Walsh Blog:  http://davidwalsh.name/mootools-context-menu
- *ContextMenu* requires MooTools Core only -- no MooTools More dependencies.
- Visit http://davidwalsh.name/mootools-context-menu for example usages.

### Syntax:

	var myContextMenu = new ContextMenu(options);

### Arguments:

1. options - (*object*, optional) Initial options for the class.

### Options:

* actions - (*object*, defaults to {})  The set of action names and functions to be executed.
* fadeSpeed - (*integer*, defaults to 200)  The speed at which the menu should fade in and out.
* menu - (*string*, defaults to 'contextmenu') The ID of the element that represents the menu XHTML.
* offsets - (*object*, defaults to {x:0,y:0}) The offset position of the context menu.
* stopEvent - (*boolean*, defaults to true)  Denotes if the event should be stopped when the menu is triggered to display.
* targets - (*string*, defaults to 'body')  The elements that the context menu will be triggered by.
* trigger - (*string*, defaults to 'contextmenu')  The event which will trigger the display of the context menu.


### Returns:

* (*object*) A new *ContextMenu* instance.



### Events:

### show

* (*function*) Function to execute when the menu is shown

### Signature

	onShow()
	
### hide

* (*function*) Function to execute when the menu is hidden

### Signature

	onHide()
	
### click

* (*function*) Function to execute when any menu item is clicked

### Signature

	onClick(item,event)
	
#### Arguments:

1. item - (*Element*) The element that was clicked.
2. event - (*Event*) The event object.


this.ContextMenu Method: disableItem {#this.ContextMenu:disableItem}
---------------------------------------------------------------------

Disables a ContextMenu menu item.

### Syntax:

	menu.disableItem('copy');

### Arguments:

1. item - (*string*) The name of the item to disable. (The element in the menu with the "#copy" href)

### Returns:

* (*object*) The *ContextMenu* instance.



this.ContextMenu Method: enableItem {#this.ContextMenu:enableItem}
-------------------------------------------------------------------

Enables a ContextMenu menu item.

### Syntax:

	menu.enableItem('copy');

### Arguments:

1. item - (*string*) The name of the item to enable. (The element in the menu with the "#copy" href)

### Returns:

* (*object*) The *ContextMenu* instance.





this.ContextMenu Method: disable {#this.ContextMenu:disable}
-------------------------------------------------------------

Disables the ContextMenu instance.

### Syntax:

	menu.disable();

### Returns:

* (*object*) The *ContextMenu* instance.





this.ContextMenu Method: enable {#this.ContextMenu:enable}
-----------------------------------------------------------

Enables the ContextMenu instance.

### Syntax:

	menu.enable();

### Returns:

* (*object*) The *ContextMenu* instance.