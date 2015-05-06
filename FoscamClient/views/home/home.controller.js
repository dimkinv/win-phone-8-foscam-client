angular.module('FoscamClient')
.controller('HomeController', function ($scope, winjsBridge) {
    winjsBridge.processAll();
});