$(function (){

      function initMap(){

        var location = new google.maps.latlng(0.3383626,32.5877573);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: location,
          zoom: 16,
          panControl: false,
          mapTypeId: google.maps.mapTypeId.ROADMAP

        }

        var map = new google.maps.Map(mapCanvas, mapOptions);

      }

      google.maps.event.addDomListener(window, 'load', initMap);

});
