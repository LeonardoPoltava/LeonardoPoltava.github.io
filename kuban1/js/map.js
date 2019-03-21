var map;

function initMap() {
	'use strict';
	map = new google.maps.Map(document.getElementById('map'), {
		// Zoom range level
		zoom: 17,
		center: new google.maps.LatLng(55.730849, 37.685958),
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
		position: new google.maps.LatLng(55.730849, 37.685958),
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

//ymaps.ready(function () {
//    var myMap = new ymaps.Map('map', {
//            center: [55.730849, 37.685958],
//            zoom: 17
//        }, {
//            searchControlProvider: 'yandex#search'
//        }),
//        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//            balloonContentBody: [
//                '<address>',
//                '<strong>«Циторус»</strong>',
//                '</address>'
//            ].join('')
//        }, {
//            iconLayout: 'default#image',
//            iconImageHref: 'images/map-marker.png',
//            iconImageSize: [106, 125],
//            iconImageOffset: [-50, -102]
//        });
//        myMap.geoObjects.add(myPlacemark);
//});