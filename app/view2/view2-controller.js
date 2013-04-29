angular.module('application.controllers')
    //define the controller for view1
    .controller('view2-controller', ['$scope', 'dataService', 'requestNotificationChannel', function($scope, dataService, requestNotificationChannel) {
        $scope.hop = null;

        var onEditDataHandler = function(item) {
            $scope.hop = item;
        };

        requestNotificationChannel.onEditData($scope, onEditDataHandler);

        $scope.onSave = function() {
            dataService.saveHop($scope.hop);
            $scope.hop = null;
        }

        $scope.onCancel = function() {
            $scope.hop = null;
        }
    }]);