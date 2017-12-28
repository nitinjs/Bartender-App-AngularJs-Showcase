(function () {
    angular.module('app').directive('fascetTracer', function () {
        function link(scope, element, attrs, modelCtrl) {
            var eName = angular.element(element).attr("name");
            var logText = 'the element "' + eName + '" ';
            angular.element(element).on("click mousedown mouseup focus blur keydown change", function (e) {
                console.log(new Date().toLocaleTimeString()+': "' + e.type + '"' + " event occurred for " + logText);
            });
        }

        var directive = {
            link: link,
            restrict: 'A',
        };
        return directive;
    });
})();