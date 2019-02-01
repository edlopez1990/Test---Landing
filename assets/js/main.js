$(document).ready(function() {
  windowheight = $(window).height();
    t = windowheight - 120; // 450 es el numero que ocupa el header
		$(".content-header").css('height', t); // en el caso que sea declarado el div con position: relativa
		$('.box-testimonials').slick({
			centerMode: true,
			centerPadding: '60px',
			slidesToShow: 3,
			nextArrow: $('.next'),
			prevArrow: $('.prev'),
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 1
					}
				}
			]
		});

		
});

function myMap() {
	// Styles a map in night mode.
	var myLatLng = {lat: 52.479781, lng: 62.185642}; 
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 52.479781, lng: 62.185642},
		zoom: 2,
		styles: [
		{
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#212121"
			}
			]
		},
		{
			"elementType": "labels.icon",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#757575"
			}
			]
		},
		{
			"elementType": "labels.text.stroke",
			"stylers": [
			{
				"color": "#212121"
			}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#757575"
			}
			]
		},
		{
			"featureType": "administrative.country",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#9e9e9e"
			}
			]
		},
		{
			"featureType": "administrative.locality",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#bdbdbd"
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#757575"
			}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#181818"
			}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#616161"
			}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "labels.text.stroke",
			"stylers": [
			{
				"color": "#1b1b1b"
			}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": [
			{
				"color": "#2c2c2c"
			}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#8a8a8a"
			}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#373737"
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#3c3c3c"
			}
			]
		},
		{
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#4e4e4e"
			}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#616161"
			}
			]
		},
		{
			"featureType": "transit",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#757575"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#000000"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#3d3d3d"
			}
			]
		}
		]
	});
	var image = 'assets/img/point.png';
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: image
	});
}
