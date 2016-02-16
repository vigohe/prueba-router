/**
 * Created by vigohe on 15-02-16.
 */

(function () {
    'use strict';

    var app = angular.module('app.notificacion', []);

    app.controller("NotificacionController", NotificacionController);

    NotificacionController.$inject = ["$stateParams"];

    function NotificacionController($stateParams){
        var vm = this;
        vm.titulo = "Estas en NotificacionController";

        console.log("Se carga NotificacionController...");

        console.log($stateParams);

    }

}());