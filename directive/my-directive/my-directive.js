angular.module('angularLearn')
    .directive('myDirective', function () {

        return {

            restrict:'EACM',
            replace:true,
            scope:{

                myUrl:'=someAttr',
                myLinkText:'@'

            },
            template: '<div><label>My Url Field:</label><input type="text" ng-model="myUrl"/><a href="{{ myUrl }}">{{ myLinkText }}</a></div>'

        }

    });
