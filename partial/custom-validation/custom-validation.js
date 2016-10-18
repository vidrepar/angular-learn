angular.module('angularLearn').controller('CustomValidationCtrl',function($scope){


})
    .directive('ensureUniquesec', function ($http) {

        return {

            require:'ngModel',
            link: function (scope, ele, attrs, c) {

                scope.$watch(attrs.ngModel, function () {

                    $http({

                        method:'POST',
                        url: 'api/check' + attrs.ensureUnique,
                        data: {
                            field: attrs.ensureUnique,
                            value: scope.ngModel
                        }

                    }).success(function (data, status, headers, cfg) {

                        c.$setValidity('unique', data.isUnique);

                    }).error(function (data, status, headers, cfg) {

                        c.$setValidity('unique', false);

                    })

                });

            }

        }

})

;
