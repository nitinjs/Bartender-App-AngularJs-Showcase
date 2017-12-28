(function () {
    angular.module('app').directive('fascetTracer2', function () {
        function link(scope, element, attrs, modelCtrl) {
            var $outputElement = angular.element(element);            
            $outputElement.text("");
            angular.element("button,input").on("click mouseover mousedown mouseup focus blur keydown change", function (e) {
                var eName = angular.element(e.target).attr("name");
                var logText = 'the element "' + eName + '" ';
                $outputElement.text(new Date().toLocaleTimeString() + ': "' + e.type + '"' + " event occurred for " + logText + "\n" + $outputElement.text());
            });
        }

        var directive = {
            link: link,
            restrict: 'A',
        };
        return directive;
    });
})();