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
	new google.maps.Map(document.getElementById('map'), {
		center: { lat: position.coords.latitude, lng: position.coords.longitude},
		zoom: 12
	});
}

window.onload = function () {
    Array.prototype.forEach.call(document.getElementsByClassName("letter"), function(e) {
        e.addEventListener("click", function(e) {
            Array.prototype.forEach.call(document.getElementsByClassName('letter'), function(letter) {
                if(letter.getElementsByClassName("big-letter")[0].innerHTML != e.target.getElementsByClassName("big-letter")[0].innerHTML) {
                    letter.style.top='100vw';
                }
            });
        });
    });
};