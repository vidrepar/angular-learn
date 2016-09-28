angular.module('angularLearn', [
    'ui.bootstrap',
    'ui.router',
    'ngAnimate',
    'ngMessages'
]);

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
    $stateProvider.state('form-validation', {
        url: '/form-validation',
        templateUrl: 'partial/form-validation/form-validation.html'
    });
    $stateProvider.state('signup-form', {
        url: '/signup-form',
        templateUrl: 'partial/signup-form/signup-form.html'
    });
    $stateProvider.state('directive-intro', {
        url: '/directive-intro',
        templateUrl: 'partial/directive-intro/directive-intro.html'
    });
    $stateProvider.state('builtin-directives', {
        url: '/builtin-directives',
        templateUrl: 'partial/builtin-directives/builtin-directives.html'
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
