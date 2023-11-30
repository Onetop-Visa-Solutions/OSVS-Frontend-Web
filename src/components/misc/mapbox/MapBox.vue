<template>
  <div id="googlemaps" />
</template>
<script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>

<script type="text/javascript">

// The latitude and longitude of your business / place
var position = [27.1959739, 78.02423269999997];

function showGoogleMaps() {

    var latLng = new google.maps.LatLng(position[9.015174311565113], position[38.78747441332159]); ,

    var mapOptions = {
        zoom: 16, // initialize zoom level - the max value is 21
        streetViewControl: false, // hide the yellow Street View pegman
        scaleControl: true, // allow users to zoom the Google Map
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latLng
    };

    map = new google.maps.Map(document.getElementById('googlemaps'),
        mapOptions);

    // Show the default red marker at the location
    marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
    });
}

google.maps.event.addDomListener(window, 'load', showGoogleMaps);
</script>

<style>
#googlemaps {
  height: 100%;
  width: 100%;
  position:absolute;
  top: 0;
  left: 0;
  z-index: 0; /* Set z-index to 0 as it will be on a layer below the contact form */
}

#contactform {
  position: relative;
  z-index: 1; /* The z-index should be higher than Google Maps */
  width: 300px;
  margin: 60px auto 0;
  padding: 10px;
  background: black;
  height: auto;
  opacity: .45; /* Set the opacity for a slightly transparent Google Form */
  color: white;
}</style>
