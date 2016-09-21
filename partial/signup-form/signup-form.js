angular.module('angularLearn')
    .controller('SignupFormCtrl',function($scope){

    $scope.submitted = false;
    $scope.signupForm = function () {

        console.log($scope.signup_form.name.$error);
        console.log($scope.signup_form.$valid);
        console.log($scope.signup_form.$submitted);

        if ( $scope.signup_form.$valid ) {

            console.log('test');

        } else {
            //$scope.signup_form.submitted = true;
        }
    };

});
