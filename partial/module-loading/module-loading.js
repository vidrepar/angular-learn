angular.module('angularLearn')
    .config(function ($provide, $locationProvider) {

        //$locationProvider.html5Mode(false);
        //$locationProvider.hashPrefix('!');

    })
    .controller('ModuleLoadingCtrl', function ( $scope, $stateParams, $location, greeter ) {

        console.log(greeter);

        console.log($location.hash());
        console.log($location.host());
        console.log($location.protocol());
        console.log($location.search({ name: 'Ari', username: 'auser' }));

    })
    .factory('greeter', function () {

        return 'Something';

    })
    .factory('githubService', function ($http) {

        var githubUrl = 'https://api.github.com';
        var githubUsername;

        var runUserRequest = function (username, path) {

            return $http({
                method: 'JSONP',
                url: githubUrl + '/users/' +
                    githubUsername + '/' +
                    path + '?callback=JSON_CALLBACK'
            });

        };

        return {

            events: function (username) {

                return runUserRequest(username, 'events')

            },
            setUsername: function (username) {

                githubUsername: username;

            }

        };

    })
    /*.provider('githubService', function () {

        var githubUrl = 'https://github.com';

        /!*setGithubUrl: function (url) {

            if (url) {
                githubUrl = url
            }

        }
        method: JSONP,
            $get
        :
        function ($http) {
            self = this;
            return $http({

                method: self.method,
                url: githubUrl + '/events'

            });
        }
    }*!/

    })*/
    .controller('SomeCtrl', function ($scope, $timeout, greeter, githubService) {

        $scope.setUsername = githubService.setUsername;

        var timeout;

        $scope.$watch('username', function (newUsername) {


            if ( newUsername ) {

                if ( timeout ) $timeout.cancel(timeout);

                timeout = $timeout(function () {

                    githubService.events(newUsername)
                        .success(function (data, status, headers) {

                            $scope.events = data.data;

                        })

                }, 350)

            }




        });

    })

;
