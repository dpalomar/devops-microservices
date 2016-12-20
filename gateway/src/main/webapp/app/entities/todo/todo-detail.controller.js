(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .controller('TodoDetailController', TodoDetailController);

    TodoDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'DataUtils', 'entity', 'Todo'];

    function TodoDetailController($scope, $rootScope, $stateParams, previousState, DataUtils, entity, Todo) {
        var vm = this;

        vm.todo = entity;
        vm.previousState = previousState.name;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('gatewayApp:todoUpdate', function(event, result) {
            vm.todo = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
