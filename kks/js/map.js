var map;
function initMap() {
	'use strict';
	map = new google.maps.Map(document.getElementById('map'), {
		// Zoom range level
		zoom: 17,
		center: new google.maps.LatLng(50.458943, 30.498610),
		mapTypeId: 'roadmap'
	});
    var marker = new google.maps.Marker({
        position: map.center,
        map: map
    });
}