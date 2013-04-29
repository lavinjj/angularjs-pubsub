angular.module('application.controllers')
    //define the controller for view1
    .controller('view1-controller', ['$scope', 'dataService', 'requestNotificationChannel', function($scope, dataService, requestNotificationChannel) {
        $scope.hops = dataService.getHops();

        $scope.onEdit = function(hop) {
            requestNotificationChannel.editData(hop);
        }

        $scope.onDelete = function(hop) {
            dataService.deleteHop(hop);
        }
    }]);