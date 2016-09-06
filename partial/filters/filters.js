angular.module('angularLearn').controller('FiltersCtrl',function($scope, $filter){

    $scope.name = $filter('lowercase')('Ari');

    $scope.today = Date.now();

});
