var map;
function initMap() {
	'use strict';
	map = new google.maps.Map(document.getElementById('map'), {
		// Zoom range level
		zoom: 17,
		center: new google.maps.LatLng(50.482553, 30.591479),
		mapTypeId: 'roadmap',
        styles: [{
            stylers: [{
              saturation: -100
            }]
          }]
	});

	var icon = {
        url: 'images/map-marker.png',
        scaledSize: new google.maps.Size(106, 125),
    };

	var features = [{
		position: new google.maps.LatLng(50.482553, 30.591479),
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