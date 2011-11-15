/*
---
description:     ContextMenu

authors:
  - David Walsh (http://davidwalsh.name)

license:
  - MIT-style license

requires:
  core/1.2.1:   '*'
  more/1.2.1:   'Fx.*'

provides:
  - ContextMenu
...
*/
var ContextMenu=new Class({Implements:[Options,Events],options:{actions:{},menu:"contextmenu",stopEvent:true,targets:"body",trigger:"contextmenu",offsets:{x:0,y:0},onShow:function(){},onHide:function(){},onClick:function(){},fadeSpeed:200},initialize:function(a){this.setOptions(a);this.menu=document.id(this.options.menu);this.targets=$$(this.options.targets);this.fx=new Fx.Tween(this.menu,{property:"opacity",duration:this.options.fadeSpeed});this.hide().startListener();this.menu.setStyles({position:"absolute",top:"-900000px",display:"block"});},startListener:function(){this.targets.each(function(a){a.addEvent(this.options.trigger,function(b){if(!this.options.disabled){if(this.options.stopEvent){b.stop();}this.options.element=document.id(a);this.menu.setStyles({top:(b.page.y+this.options.offsets.y),left:(b.page.x+this.options.offsets.x),position:"absolute","z-index":"2000"});this.show();}}.bind(this));},this);this.menu.getElements("a").each(function(a){a.addEvent("click",function(b){if(!a.hasClass("disabled")){this.execute(a.get("href").split("#")[1],document.id(this.options.element));this.fireEvent("click",[a,b]);}}.bind(this));},this);document.id(document.body).addEvent("click",function(){this.hide();}.bind(this));},show:function(){this.fx.start(1);this.fireEvent("show");this.shown=true;return this;},hide:function(){if(this.shown){this.fx.start(0);this.fireEvent("hide");this.shown=false;}return this;},disableItem:function(a){this.menu.getElements("a[href$="+a+"]").addClass("disabled");return this;},enableItem:function(a){this.menu.getElements("a[href$="+a+"]").removeClass("disabled");return this;},disable:function(){this.options.disabled=true;return this;},enable:function(){this.options.disabled=false;return this;},execute:function(b,a){if(this.options.actions[b]){this.options.actions[b](a,this);}return this;}});