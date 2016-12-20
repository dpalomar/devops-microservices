(function() {
    'use strict';
    angular
        .module('gatewayApp')
        .factory('Todo', Todo);

    Todo.$inject = ['$resource', 'DateUtils'];

    function Todo ($resource, DateUtils) {
        var resourceUrl =  'todoms/' + 'api/todos/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.recordatorio = DateUtils.convertDateTimeFromServer(data.recordatorio);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
