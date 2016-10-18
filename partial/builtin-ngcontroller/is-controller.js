angular.module('angularLearn')
    .controller('IsController', function ($scope) {

    })
    .directive('gDirective', function () {
        return {
            restrict: 'A',
            template: 'Inside g-directive, isolate scope: {{ myProperty }}',
            scope: {}
        };
    })
    .directive('myInheritScopeDirective', function () {

        return {

            restrict: 'A',
            template: 'Inside myInheritScopeDirective, isolate scope: {{ myProperty }}',
            scope: true

        };

    })
    .directive('iDirective', function () {

        return {
            restrict: 'A',
            scope: {},
            priority:100,
            template: '<div>Inside iDirective: {{ myProperty }}</div>'
        };

    })

;
