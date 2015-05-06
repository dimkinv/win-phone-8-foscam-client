angular.module('FoscamClient')
.controller('CameraDetailsController', function ($scope, $stateParams, winjsBridge, proxy) {
    winjsBridge.processAll();
    var model = {
        camera: null,
        cameraSnapshot: null
    };
    $scope.model = model;

    var events = {
        testCamera: function () {
            proxy.getSnapshot(model.camera)
            .then(function (img) {
                model.cameraSnapshot = 'url("data:image/png;base64,' + img + '")';
            })
            .catch(function () {

            })
        }
    }
    $scope.events = events;

    if ($stateParams.cameraId === 'new') {
        //model.camera = {
        //    name: 'NewCam1',
        //    port: 80
        //};
        model.camera = {
            name: 'NewCam1',
            port: 8889,
            host: '10.0.0.2',
            username: 'admin',
            password: 'M711391m'
        };
        return;
    }
});