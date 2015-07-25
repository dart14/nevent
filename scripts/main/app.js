(function() {
    'use strict';

    angular.module('app', [
        'ngRoute',
        'mobile-angular-ui'
    ]).config(conf);

    conf.$inject = ['$routeProvider'];

    function conf(routeProvider) {
        routeProvider
             .when('/', {
                templateUrl: 'scripts/home/home.html',
                controller: 'Home',
                controllerAs: 'home'
             });

    };

    console.info("Refactored app module loaded.");
})();