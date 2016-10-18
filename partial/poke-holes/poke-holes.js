angular.module('angularLearn')

    .controller('PokeHolesCtrl',function($scope){


    })

    .directive('dateDirective', function () {

        return {

            require: '?ngModel',
            link: function ( scope, ele, attr, ngModel ) {

                if (!ngModel) return;

                $(function () {

                    ele.datepicker({

                        onSelect: function (date) {

                            scope.$apply(function () {

                                ngModel.$setViewValue(date);

                            })

                        }

                    });

                })

            }

        }

    })

    .directive('sidebox', function () {

        return {

            restrict: 'EA',
            scope: {
                title:'@'
            },
            transclude:true,
            templateUrl: '/partial/poke-holes/poke-holes.tpl.html'

        }

    })
    .directive('link', function () {

        return {

            restrict: 'EA',
            transclude: true,
            controller: function ($scope, $element, $transclude, $log) {

                $transclude(function (clone) {

                    var a = angular.element('<a>');
                    a.attr('href', clone.text());
                    a.text(clone.text());
                    $log.info('Created new a tag in link directive');
                    $element.append(a);

                });

            }

        }

    })

;
