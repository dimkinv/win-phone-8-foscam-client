angular.module('FoscamClient')
.controller('HomeController', function ($scope) {
    WinJS.Namespace.define("Sample", {
        outputCommand: WinJS.UI.eventHandler(function (ev) {
            var status = document.querySelector(".status");
            var command = ev.currentTarget;
            if (command.winControl) {
                var label = command.winControl.label || command.winControl.icon || "button";
                var section = command.winControl.section || "";
                var msg = section + " command " + label + " was pressed";
                status.textContent = msg;
            }
        })
    });

    WinJS.UI.processAll();
});