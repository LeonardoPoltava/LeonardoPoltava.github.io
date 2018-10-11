var map;

function initMap() {
	'use strict';
	map = new google.maps.Map(document.getElementById('map'), {
		// Zoom range level
		zoom: 16,
		center: new google.maps.LatLng(55.7035482,37.6401742),
		mapTypeId: 'roadmap',
	});

	var icon = {
        url: 'images/svg/nav_logo.svg', // url
        scaledSize: new google.maps.Size(50, 73), // scaled size
    };

	var features = [{
		position: new google.maps.LatLng(55.7035482,37.6401742),
		type: 'icon'
	}];

	// Create markers.
	features.forEach(function (feature) {
		var marker = new google.maps.Marker({
			position: feature.position,
			icon: icon,
			map: map
		});
	});
}