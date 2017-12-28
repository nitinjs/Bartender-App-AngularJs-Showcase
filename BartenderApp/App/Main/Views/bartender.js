(function () {
    var controllerId = 'bartenderController';
    angular.module('app').controller(controllerId, [
        '$scope', '$rootScope', '$filter', '$stateParams', '$state', 'bartenderService', function ($scope, $rootScope, $filter, $stateParams, $state, bs) {
            $scope.ProductName = "";
            $scope.IsValidInput = false;
            $scope.IsMixed = false;

            $scope.mixtureId = $stateParams.mixtureId;
            $scope.ProductTypeId = "";
            $scope.Mixture = "";

            if (angular.isUndefined($scope.mixtureId) == false && $scope.mixtureId != 0) {
                $scope.ProductTypeId = $scope.mixtureId;
            }

            $scope.$watch(function (scope) { return scope.ProductTypeId; },
              function () {
                  $scope.ProductName = "Loading..";
                  var typeId = parseInt($scope.ProductTypeId);
                  if (isNaN(typeId) == false && typeId != 0) {
                      var promise = bs.validateProduct(typeId);
                      promise.then(function (d) {
                        $scope.IsValidInput = d.data.IsValid;
                        if ($scope.IsValidInput)
                            $scope.ProductName = d.data.ProductDetails.Name;
                      })
                      .catch(function (d) {
                        $scope.IsValidInput = false;
                        alert("Error validating product");
                      });
                  } else {
                      $scope.IsValidInput = false;
                  }
                  $scope.IsMixed = false;
              });

            $scope.Mix = function () {
                $scope.Mixture = "Mixing..";
                bs.getDrinkName($scope.ProductTypeId, function (d) {
                    $scope.Mixture = d.data.Name;
                    $scope.IsMixed = true;
                }, function (d) {
                    $scope.IsValidInput = false;
                    $scope.IsMixed = false;
                    alert("Error making drink");
                });
            };
        }
    ]);
})();