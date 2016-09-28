angular.module('angularLearn')
    .controller('BuiltinDirectivesCtrl',function($scope){


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
