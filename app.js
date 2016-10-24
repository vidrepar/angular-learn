angular.module('angularLearn', [
    'ui.bootstrap',
    'ui.router',
    'ngAnimate',
    'ngMessages',
    'ngResource',
    'restangular'
]);

angular.module('angularLearn')
    .factory('GithubService', function ($q, $http) {

        var deferred = $q.defer();

        deferred.resolve({
            name: 'Ari',
            username: 'auser'
        });

        deferred.reject('Cant update user');

    })
    .constant('apiKey', 'YOUR_API_KEY')
    /*.factory('Auth', function ($cookieStore, ACCESS_LEVELS, RestangularProvider, apiKey) {



        RestangularProvider
            .setBaseUrl('https://api.mongolab.com/api/1/databases/YOUR_DB/collections')
            .setDefaultRequestParams({
                apiKey:apiKey
            })
            .setRestangularFields({
                id:'_id.$oid'
            })
            .setRequestInterceptor(function (elem, operation, what) {

                if (operation === 'put') {

                    elem._id = undefined;
                    return elem;

                }

                return elem;

            })

        ;








        var _user = $cookieStore.get('user');

        /!*var setUser = function (user) {

            if(!user.role || user.role <0) {

                user.role = ACCESS_LEVELS.pub;

            }

            _user = user;

            $cookieStore.put('user', _user);

            return {
                isAuthorized: function (1v1) {

                    return _user.role >= 1;

                }/!*,
                setUser: setUser,*!/



            }

        }*!/


    })*/
    .constant('ACCESS_LEVELS', {
        pub: 1,
        user: 2
    })
    .config(function($stateProvider, $urlRouterProvider, $httpProvider, ACCESS_LEVELS) {



        /*// Interceptor
        var interceptor = function ($q, $rootScope, Auth) {

            return {

                'request': function (req) {

                    req.params = req.params || {};
                    if(Session.isAuthenticated() && !req.params.token){

                        req.params.token = Auth.getToken();

                    }

                    return req;

                },
                'requestError': function (reqError) {

                    return reqError;

                },

                'response':function (resp) {

                    if(resp.config.url === '/api/login'){

                        Auth.setToken(resp.data.token);

                    }

                    return resp;

                },
                'responseError': function (rejection) {

                    switch(rejectionStatus) {

                        case 401:
                            if(rejection.config.url !== 'api/login')
                                $rootScope
                                .$broadcast('auth:loginRequired');
                            break;

                        case 403:
                            $rootScope
                                .$broadcast('auth:forbidden');
                            break;

                        case 404:
                            $rootScope
                                .$broadcast('page:notFound');
                            break;

                        case 500:
                            $rootScope
                                .broadcast('server:error');
                            break;

                    }

                    return $q.reject(rejection);

                }

            }

        };

        $httpProvider
            .interceptors.push(interceptor);*/







    $stateProvider.state('test', {
        url: '/test',
        templateUrl: 'partial/test/test.html',
        access_level: ACCESS_LEVELS.pub
    });
    $stateProvider.state('parse', {
        url: '/parse',
        templateUrl: 'partial/parse/parse.html',
        access_level: ACCESS_LEVELS.user
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
    $stateProvider.state('form-controller', {
        url: '/form-controller',
        templateUrl: 'partial/form-controller/form-controller.html'
    });
    $stateProvider.state('counter', {
        url: '/counter',
        templateUrl: 'partial/counter/counter.html'
    });
    $stateProvider.state('builtin-ngcontroller', {
        url: '/builtin-ngcontroller',
        templateUrl: 'partial/builtin-ngcontroller/builtin-ngcontroller.html'
    });
    $stateProvider.state('poke-holes', {
        url: '/poke-holes',
        templateUrl: 'partial/poke-holes/poke-holes.html'
    });
    $stateProvider.state('custom-validation', {
        url: '/custom-validation',
        templateUrl: 'partial/custom-validation/custom-validation.html'
    });

    $stateProvider.state('module-loading', {
        url: '/module-loading',
        controller: 'SomeCtrl',
        //controller: 'ModuleLoadingCtrl',
        templateUrl: 'partial/module-loading/module-loading.html'
    });

    $stateProvider.state('tdd', {
        url: '/tdd',
        templateUrl: 'partial/tdd/tdd.html'
    });

    /!* Add New States Above *!/
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
