angular.module('angularLearn', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('angularLearn').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('test', {
        url: '/test',
        templateUrl: 'partial/test/test.html'
    });
    $stateProvider.state('parse', {
        url: '/parse',
        templateUrl: 'partial/parse/parse.html'
    });
    $stateProvider.state('filters', {
        url: '/filters',
        templateUrl: 'partial/filters/filters.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

});

angular.module('angularLearn').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
