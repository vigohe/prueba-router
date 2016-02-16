/**
 * Created by vigohe on 12-02-16.
 */
(function () {
    'use strict';

    var app = angular.module('app', ["ui.router","app.cliente","app.afiliado","app.notificacion","app.prestador"]);
    app.config(config);

    function config($stateProvider, $urlRouterProvider) {

        $stateProvider.state('home', {
            url: '/'
        });

        $urlRouterProvider.otherwise('/');
    }
}());