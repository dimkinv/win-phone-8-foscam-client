angular.module('FoscamClient', [
    'ui.router',
    'ngAnimate',
    //'winjs'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                templateUrl: '/views/home/home.html',
                controller: 'HomeController'
            })
            .state('secondScreen', {
                templateUrl: '/views/second-screen/second-screen.html'
            });
    })
.run(function ($rootScope, $state) {
    $state.go('home');
    $rootScope.$on('$stateChangeSuccess', function (evt, toState, fromState) {
        WinJS.Navigation.navigate(toState, fromState);
    });

    WinJS.Navigation.addEventListener('navigating', function (evt) {
        //because event handler happend outside of "angular world" we need to run it inside the digest cycle to work
        //$rootScope.$apply(function () {
        $state.go(evt.detail.location.name);

        //if back button was clicked remove one navigation state from stack
        if (evt.detail.delta === -1) {
            WinJS.Navigation.back(1);
        }
        // });
    });
})
.animation('.turnstile-animation', function () {
    return {
        enter: function (element, done) {
            WinJS.UI.Animation.turnstileForwardIn(element[0]).then(done);
        },

        leave: function (element, done) {
            done();
        }
    };
});