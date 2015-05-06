angular.module('FoscamClient')
.service('proxy', function ($q, $http) {
    this.getSnapshot = function (camera) {
        var deferred = $q.defer();

        var url = camera.host.indexOf('http' === -1) ? 'http://' + camera.host : camera.host;
        url += ':' + camera.port;
        url += '/snapshot.cgi'

        var token = camera.username + ':' + camera.password;
        token = 'Basic ' + btoa(token);
        console.log(token);
        $http.get(url, {
            headers: {
                Authorization: token
            },
            responseType: 'arraybuffer'
        })
        .success(function (data) {
            var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(data)));
            deferred.resolve(base64String);
        })
        .error(function (err, status) {
            if (status === 401) {
                deferred.reject('Not authorized, please check you\'r username and password');
            }
        });

        return deferred.promise;
    }
});