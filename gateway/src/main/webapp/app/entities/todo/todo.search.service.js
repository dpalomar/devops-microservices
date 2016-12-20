(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .factory('TodoSearch', TodoSearch);

    TodoSearch.$inject = ['$resource'];

    function TodoSearch($resource) {
        var resourceUrl =  'todoms/' + 'api/_search/todos/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
