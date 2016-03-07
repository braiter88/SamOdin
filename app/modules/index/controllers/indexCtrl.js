(function() {
    angular.module('controller.indexCtrl', []).controller('indexCtrl', [
        '$scope',
        '$state',
        function($scope, $state) {
            $scope.breadcrumbs = {lol: ''};
            $scope.lol = function(){
                console.log('lol');
            };
        }
    ]);
})();