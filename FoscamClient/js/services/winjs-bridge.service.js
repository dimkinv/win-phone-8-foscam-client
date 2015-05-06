angular.module('FoscamClient')
    .service('winjsBridge', function () {
        this.processAll = function () {
            setTimeout(function () {
                WinJS.UI.processAll();
            }, 0);
        }
    });