/***  BOOTSTRAP TOGGLE SWITCH ***/
!function(a){"use strict";a.fn.bootstrapSwitch=function(b){var c={init:function(){return this.each(function(){var c,d,e,f,i,j,b=a(this),g="",h=b.attr("class"),k="ON",l="OFF",m=!1;a.each(["switch-mini","switch-small","switch-large"],function(a,b){h.indexOf(b)>=0&&(g=b)}),b.addClass("has-switch"),void 0!==b.data("on")&&(i="switch-"+b.data("on")),void 0!==b.data("on-label")&&(k=b.data("on-label")),void 0!==b.data("off-label")&&(l=b.data("off-label")),void 0!==b.data("icon")&&(m=b.data("icon")),d=a("<span>").addClass("switch-left").addClass(g).addClass(i).html(k),i="",void 0!==b.data("off")&&(i="switch-"+b.data("off")),e=a("<span>").addClass("switch-right").addClass(g).addClass(i).html(l),f=a("<label>").html("&nbsp;").addClass(g).attr("for",b.find("input").attr("id")),m&&f.html('<i class="icon icon-'+m+'"></i>'),c=b.find(":checkbox").wrap(a("<div>")).parent().data("animated",!1),b.data("animated")!==!1&&c.addClass("switch-animate").data("animated",!0),c.append(d).append(f).append(e),b.find(">div").addClass(b.find("input").is(":checked")?"switch-on":"switch-off"),b.find("input").is(":disabled")&&a(this).addClass("deactivate");var n=function(a){a.siblings("label").trigger("mousedown").trigger("mouseup").trigger("click")};b.on("keydown",function(b){32===b.keyCode&&(b.stopImmediatePropagation(),b.preventDefault(),n(a(b.target).find("span:first")))}),d.on("click",function(){n(a(this))}),e.on("click",function(){n(a(this))}),b.find("input").on("change",function(b){var c=a(this),d=c.parent(),e=c.is(":checked"),f=d.is(".switch-off");b.preventDefault(),d.css("left",""),f===e&&(e?d.removeClass("switch-off").addClass("switch-on"):d.removeClass("switch-on").addClass("switch-off"),d.data("animated")!==!1&&d.addClass("switch-animate"),d.parent().trigger("switch-change",{el:c,value:e}))}),b.find("label").on("mousedown touchstart",function(b){var c=a(this);j=!1,b.preventDefault(),b.stopImmediatePropagation(),c.closest("div").removeClass("switch-animate"),c.closest(".switch").is(".deactivate")?c.unbind("click"):(c.on("mousemove touchmove",function(b){var c=a(this).closest(".switch"),d=(b.pageX||b.originalEvent.targetTouches[0].pageX)-c.offset().left,e=100*(d/c.width()),f=25,g=75;j=!0,f>e?e=f:e>g&&(e=g),c.find(">div").css("left",e-g+"%")}),c.on("click touchend",function(b){var c=a(this),d=a(b.target),e=d.siblings("input");b.stopImmediatePropagation(),b.preventDefault(),c.unbind("mouseleave"),j?e.prop("checked",!(-25>parseInt(c.parent().css("left")))):e.prop("checked",!e.is(":checked")),j=!1,e.trigger("change")}),c.on("mouseleave",function(b){var c=a(this),d=c.siblings("input");b.preventDefault(),b.stopImmediatePropagation(),c.unbind("mouseleave"),c.trigger("mouseup"),d.prop("checked",!(-25>parseInt(c.parent().css("left")))).trigger("change")}),c.on("mouseup",function(b){b.stopImmediatePropagation(),b.preventDefault(),a(this).unbind("mousemove")}))})})},toggleActivation:function(){a(this).toggleClass("deactivate")},isActive:function(){return!a(this).hasClass("deactivate")},setActive:function(b){b?a(this).removeClass("deactivate"):a(this).addClass("deactivate")},toggleState:function(b){var c=a(this).find("input:checkbox");c.prop("checked",!c.is(":checked")).trigger("change",b)},setState:function(b,c){a(this).find("input:checkbox").prop("checked",b).trigger("change",c)},status:function(){return a(this).find("input:checkbox").is(":checked")},destroy:function(){var c,b=a(this).find("div");return b.find(":not(input:checkbox)").remove(),c=b.children(),c.unwrap().unwrap(),c.unbind("change"),c}};return c[b]?c[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?(a.error("Method "+b+" does not exist!"),void 0):c.init.apply(this,arguments)}}(jQuery),$(function(){$(".switch").bootstrapSwitch()});