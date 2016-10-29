function initMap() {
	if (navigator.geolocation) {
		navigator.geolocation
				 .getCurrentPosition(showPosition,
									 showPosition({
													  coords: {
														  latitude: 40.7127405,
														  longitude: -74.0059379
													  }
												  }));
	} else {
		showPosition({
						 coords: {
							 latitude: 40.7127405,
							 longitude: -74.0059379
						 }
					 }
		);
	}
}

function showPosition(position) {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: position.coords.latitude, lng: position.coords.longitude},
		zoom: 12
	});

	// Create an array of alphabetical characters used to label the markers.
	var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	var locations = [
		{ "lat": 33.792085, "lng": -84.388001 },
		{ "lat": 33.785455, "lng": -84.39266 },
		{ "lat": 33.767272, "lng": -84.400185 },
		{ "lat": 33.878995, "lng": -84.456457 },
		{ "lat": 33.77492, "lng": -84.396415 },
		{ "lat": 33.963805, "lng": -83.374642 },
		{ "lat": 33.754711, "lng": -84.388068 },
		{ "lat": 33.761585, "lng": -84.385614 }
	];

	// Add some markers to the map.
	// Note: The code uses the JavaScript Array.prototype.map() method to
	// create an array of markers based on a given "locations" array.
	// The map() method here has nothing to do with the Google Maps API.
	var markers = locations.map(function (location, i) {
		return new google.maps.Marker({
			position: location,
			label: labels[ i % labels.length ]
		});
	});


	// Add a marker clusterer to manage the markers.
	var markerCluster = new MarkerClusterer(map, markers,
		{ imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}

window.onload = function () {
    Array.prototype.forEach.call(document.getElementsByClassName("letter"), function(l) {
        l.addEventListener("click", function(e) {
                console.log(e.target);
            for(var i=0; i<document.getElementsByClassName("letter").length; i++) {
                if(document.getElementsByClassName("letter")[i].getElementsByClassName("big-letter")[0].innerHTML != e.target.getElementsByClassName("big-letter")[0].innerHTML) {
                    document.getElementsByClassName("letter")[i].style.top="100vw";
                }
            }
        });
    });
};