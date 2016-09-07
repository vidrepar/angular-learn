angular.module('angularLearn')
    .controller('FiltersCtrl',function($scope, $filter){

    $scope.name = $filter('lowercase')('Ari');

    $scope.today = Date.now();

})
    .filter('capitalize', function () {

        return function (input) {

            if ( input ) {

                return input[0].toUpperCase() + input.slice(1);

            }

        };

    })

;
