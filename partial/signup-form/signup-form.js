angular.module('angularLearn').controller('SignupFormCtrl',function($scope){

    $scope.submitted = false;
    $scope.signupForm = function () {
        if ( $scope.signup_form.$valid ) {

            console.log($scope.signup_form.$valid);
            console.log($scope.signup_form.$invalid);
            console.log($scope.signup_form.name.$error);

        } else {
            $scope.signup_form.submitted = true;
        }
    }

});
