var App = angular.module('App', []);

App.controller('cardController', function($scope, $http) {
	$http({
		method: 'GET',
		url: "./data/black.csv",
		transformResponse: function(cards) {
		// Transform CSV file into a JSON object
		var json = $.csv.toObjects(cards);
		return json;
	},
		cache: true,
	})
    .success(function(cards, status) {
        $scope.cards = cards;
    })
    .error(function(data, status) {
      $scope.cards = cards || "Request failed";
    });

    $scope.orderProp = 'model';
});
