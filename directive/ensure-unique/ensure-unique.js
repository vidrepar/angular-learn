angular.module('angularLearn')
    .directive('ensureUnique', function($http) {
    return {
        require:'ngModel',
        link: function(scope, element, attrs, ctrl) {

            var url = attrs.ensureUnique;

            console.log(url);

            ctrl.$parsers.push(function (val) {

                if (!val || val.length === 0) {

                    return;

                }

                ngModel.$setValidity('checkingAvailability', true);
                ngModel.$setValidity('usernameAvailability', false);

                $http({
                    method:'GET',
                    url: url,
                    params: {
                        username:val
                    }
                }).success(function () {
                    ngModel.$setValidity('checkingAvailability', false);
                    ngModel.$setValidity('usernameAvailability', true);
                })['catch'](function () {
                    ngModel.$setValidity('checkingAvailability', false);
                    ngModel.$setValidity('usernameAvailability', false);
                });
                return val;

            });

        }
    };
});
