/**
 * Created by vigohe on 12-02-16.
 */
(function () {
    'use strict';

    var app = angular.module('app.afiliado', []);

    app.config(config);

    function config($stateProvider){
        $stateProvider.state('cliente.afiliado', {
            url: '/afiliado/:rut',
            views: {
                'afiliado@': {
                    templateUrl: 'app/afiliado/afiliado.html',
                    controller: 'AfiliadoController',
                    controllerAs: 'afiliadoCtrl'
                }
            }
        });
    }

    app.controller("AfiliadoController", AfiliadoController);

    AfiliadoController.$inject = [];

    function AfiliadoController(){
        var vm = this;
        vm.titulo = "AfiliadoController";

        console.log("AfiliadoController");

    }

}());