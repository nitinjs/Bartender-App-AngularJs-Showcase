(function () {
    angular.module('app').directive('numbersOnly', function () {
        function link(scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (inputValue) {
                if (inputValue == undefined) {
                    return '';
                }

                inputValue = inputValue.toString();

                var transformedInput = '';
                if (attrs.allowNegative == 'true') {
                    transformedInput = inputValue.replace(/[^-\d+]/g, '');
                } else {
                    transformedInput = inputValue.replace(/[^0-9]/g, '');
                }

                //Prevent all 0's
                if (attrs.preventZero === 'true' && transformedInput && transformedInput.replace(/[0\.,]/g, '') === '') {
                    transformedInput = null;
                }


                //var transformedInput = inputValue.replace(/[^-*\d+]/g, ''); it is working
                //var transformedInput = inputValue.replace(/[^-*\d+]/g, '');
                if (parseFloat(transformedInput) < parseFloat(attrs.min) || parseFloat(transformedInput) > parseFloat(attrs.max)) {
                    transformedInput = null;
                }
                if (transformedInput != inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }

                return parseInt(transformedInput);
            });
        }

        var directive = {
            require: 'ngModel',
            link: link,
            restrict: 'EA',
            min: '=',
            max: '='
        };
        return directive;
    });
})();