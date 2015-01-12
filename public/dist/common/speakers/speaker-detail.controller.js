(function () {
    'use strict';

    angular.module('baseApp')
        .controller('SpeakerDetailController', SpeakerDetailController);

    function SpeakerDetailController(speaker) {
        var vm = this;
        vm.speakers = [speaker];
        vm.speaker = speaker;
    }

    SpeakerDetailController.$inject = ['speaker'];

}());