(function() {
    'use strict';

    angular.module('app').controller('Home', Home);

    Home.$inject = ['$scope'];

    function Home($scope) {
        
        initGeolocation();
        
        function initGeolocation()
         {
            if( navigator.geolocation )
            {
               // Call getCurrentPosition with success and failure callbacks
               navigator.geolocation.getCurrentPosition( success, fail );
            }
            else
            {
               alert("Sorry, your browser does not support geolocation services.");
            }
         }
        
        function success(data) {
            var mapCanvas = document.getElementById('map-canvas');
            var mapOptions = {
              center: new google.maps.LatLng(data.coords.latitude, data.coords.longitude),
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(mapCanvas, mapOptions);
        }
        
        function fail(data) {
            console.log('fail', data);
        }
        console.log("Home loaded.");
    };

})();