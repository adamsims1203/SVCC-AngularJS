(function () {
    'use strict';

    var app = angular.module('svccApp')
        .controller('SessionDetailController', SessionDetailController);



    function SessionDetailController(session) {
debugger;
        var vm = this;
        vm.sessions = [session];
        vm.session = session;
    }
    SessionDetailController.$inject = ['session'];

}());
