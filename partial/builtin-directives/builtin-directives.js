angular.module('angularLearn')
    .controller('PeopleController', function ($scope) {

        $scope.people = [
            { name: "Ari", city: "San Francisco" },
            { name: "Ari", city: "San Francisco" },
            { name: "Ari", city: "San Francisco" },
            { name: "Ari", city: "San Francisco" },
            { name: "Erik", city: "Seattle" }
        ];

    })
    .controller('BuiltinDirectivesCtrl',function($scope){

        $scope.someBearValue = 'hello computer';

        $scope.someAction = function () {

            $scope.someBearValue = 'hello human, from parent';

        };

        $scope.someModel = {

            someProperty:'Hello Computer!'

        };

        /*$scope.someAction = function () {

            $scope.someModel.someProperty = 'hello human!';

        };*/

})
    .controller('ChildController', function ($scope) {

        $scope.childAction = function () {

            $scope.someBareValue = 'hello human, from child'

        }

    })
    .run(function ($rootScope, $timeout) {

        $rootScope.isDisabled = true;
        $timeout(function () {
            $rootScope.isDisabled = false;
            $rootScope.myHref = 'http://google.com';
            $rootScope.imgSrc = 'https://www.google.com/images/srpr/logo11w.png';
        }, 5000);

    })

;
