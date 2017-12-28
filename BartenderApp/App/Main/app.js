(function () {
    'use strict';

    var app = angular.module('app', [
        'ngAnimate',
        'ngRoute',
        'ngSanitize',
        'ngStorage',
        'ui.router'
    ]);
    

    app.run(function ($rootScope) {
        //editableOptions.theme = 'bs3';
    });

    //Configuration for Angular UI routing.
    app.config([
        '$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/welcome');

            $stateProvider
                 .state('landing', {
                     url: '/welcome',
                     templateUrl: '/App/Main/Views/bartender.html'
                 });

            $stateProvider
                  .state('mixDrink', {
                      url: '/welcome/:mixtureId',
                      templateUrl: '/App/Main/Views/bartender.html',
                      params: {
                          'mixtureId': "0"
                      }
                  });
        }
    ]);
})();

(function () {
    var controllerId = 'AppCtrl';
    angular.module('app').controller(controllerId, [
        '$scope', '$rootScope', '$filter', '$state', function ($scope, $rootScope, $filter, $state) {         
            $scope.initialize = function () {

            };

            $scope.initialize();
        }
    ]);
})();