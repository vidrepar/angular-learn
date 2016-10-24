angular.module('angularLearn')
    .controller('FormValidationCtrl',function($scope){

    //console.log($scope.test.test.$errors);

})
    .directive('onToTen', function () {
        return {
            require:'?ngModel',
            link: function (scope, ele, attrs, ngModel) {
                if (!ngModel) {}
                ngModel.$parsers.unshift(
                    function (viewValue) {
                        var i = parseInt(viewValue);

                        if (i >= 0 && i < 10) {
                            ngModel.$setValidity('oneToTen', true);
                            return viewValue;
                        } else {
                            ngModel.$setValidity('oneToTen', false);
                            return undefined;
                        }
                    });
            }
        };
    })

;
