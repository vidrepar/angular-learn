angular.module('angularLearn').controller('ParseCtrl',function($scope, $parse, $interpolate){

    // parse
    $scope.$watch('expr', function (newVal, oldVal, scope) {

        if(newVal !== oldVal){

            var parseFun = $parse(newVal);

            $scope.parsedValue = parseFun(scope);

        }

    });

    // interpolate
    $scope.$watch('emailBody', function (body) {
        if(body){
            var template = $interpolate(body);

            $scope.previewText = template({ to:$scope.to });
        }
    });

});
