
$("li").waypoint(function(){
		$(this).toggleClass('seen');
	}, { 
		offset: 'bottom-in-view'
});