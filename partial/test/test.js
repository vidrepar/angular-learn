angular.module('angularLearn')
    .controller('TestCtrl',function($scope){

    $scope.person = {

        name : 'Ari Lerner'

    };

})

    .controller('ParentCtrl', function ($scope) {

        $scope.person = {
            greeted : true
        };

    })

    .controller('ChildCtrl', function ($scope) {

        $scope.sayHello = function () {

            $scope.person.name = "Ari Lerner";

        };

    })


;
