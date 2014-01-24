function helloWorld() {}

function initialize() {
    var latlng = new google.maps.LatLng(28.46072, 77.09970);
    var myOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

