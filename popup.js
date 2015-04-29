var $ = document;

$.addEventListener('DOMContentLoaded', function() {
	var iframe = $.createElement('iframe');
	iframe.src = "http://dank.infinite.pizza/";
	iframe.frameborder = "0";
	iframe.allowfullscreen = "true";
	$.body.appendChild(iframe);
});