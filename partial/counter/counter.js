angular.module('angularLearn').controller('CounterCtrl',function($scope){

    $scope.decrement = function () {

        $scope.count = $scope.count -1;

    };



    $scope.cities = [
        {name: 'Seattle'},
        {name: 'San Francisco'},
        {name: 'Chicago'},
        {name: 'New York'},
        {name: 'Boston'},
        {name: 'Seattle'}
    ];


    $scope.person = {
        name: null
    };

    $scope.people = [];

    $scope.submit = function () {

        if ( $scope.person.name ) {

            $scope.people.push({ name: $scope.person.name });

            $scope.person.name = '';

        }

    };


    $scope.generateNumber = function () {

        return Math.floor((Math.random()*10)+1);

    };



});
