(function() {
    angular.module('controller.mainPageCtrl', []).controller('mainPageCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        function($scope, $state, $stateParams) {
            $scope.$stateParams = $stateParams;
            $scope.gallery = [
                {
                    name: "Dodecahedron",
                    price: 2,
                    desription: "Between options 1 and 2 there's a difference that using this you'll access products via the current scope's prototype i.e. $local.$parent or $local.__proto__ ($local is the new scope created by ng-repeat",
                    canPurchase: true,
                    soldOut: false,
                    reviews:[{
                        stars: 5,
                        body: "Nice gem!",
                        author: "gem@ilovegems.com"
                    }],
                    image:
                    {
                        full: 'avatar_c_lg.jpg',
                        thumb: 'avatar_c_sm.jpg'
                    }
                },
                {
                    name: "Pentagonal Gem",
                    price: 5.95,
                    desription: "Another true form of gem...",
                    canPurchase: true,
                    soldOut: false,
                    reviews: {
                        stars: 3,
                        body: "Too expensive!",
                        author: "admin@ilovecheepgems.com"
                    },
                    image:
                    {
                        full: 'avatar_c_sm.jpg',
                        thumb: 'avatar_c_sm.jpg'
                    }
                }
            ]
        }
    ]);
})();