/**
 * Created by vigohe on 12-02-16.
 */
(function () {
    'use strict';

    var app = angular.module('app.cliente', []);

    app.config(config);

    function config($stateProvider){
        $stateProvider
            .state('cliente', {
                templateUrl: 'app/cliente/cliente.html',
                abstract : true,
                views: {
                    'notificacion@': {
                        templateUrl: 'app/notificacion/notificacion.html',
                        controller: 'NotificacionController',
                        controllerAs: 'notificacionCtrl'
                    }
                }
            });

    }

}());