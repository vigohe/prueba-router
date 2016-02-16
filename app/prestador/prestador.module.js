/**
 * Created by vigohe on 12-02-16.
 */
(function () {
    'use strict';

    var app = angular.module('app.prestador', []);

    app.config(config);

    function config($stateProvider){
        $stateProvider.state('cliente.prestador', {
            url: '/prestador/:rut',
            views: {
                'prestador@': {
                    templateUrl: 'app/prestador/prestador.html',
                    controller: 'PrestadorController',
                    controllerAs: 'prestadorCtrl'
                }
            }
        });
    }

    app.controller("PrestadorController", PrestadorController);

    PrestadorController.$inject = [];

    function PrestadorController(){
        var vm = this;
        vm.titulo = "PrestadorController";

        console.log("PrestadorController");

    }

}());