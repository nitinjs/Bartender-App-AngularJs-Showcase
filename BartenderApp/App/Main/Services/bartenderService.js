(function () {
    angular.module('app')
    .factory('bartenderService', function ($q, $http) {
        var bartenderSvc = {};
        var defer = $q.defer();

        bartenderSvc.validateProduct = function (id) {
            return $http.get('/api/Bartender/' + id);           
        };

        bartenderSvc.getDrinkName = function (id, callback, errorcallback) {
            $http.post('/api/Bartender/', id)
            .then(function onSuccess(data) {
                callback(data);
            })
            .catch(function onError(data) {
                errorcallback(data);
            });
        };

        return bartenderSvc;
    })
})();