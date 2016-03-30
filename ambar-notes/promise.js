var app = angular.module("app", []);

app.config(function ($routeProvider){
	$routeProvider
	.when('/',
	{
		templateUrl: "app.html",
		controller: "AppCtrl"
	})
});

app.controller("AppCtrl", function($scope, $q){

	var defer = $q.defer();

	defer.promise
		.then( function(weapon){
			console.log("You can have my " + weapon);

			return "bow";
		})
		.then(function(weapon){
			console.log("And my " + weapon);

			return "axe";
		})
		.then(function(weapon){
			console.log("And my " + weapon);

			return "wand";
		})

	defer.resolve("sword")
		

	$scope.model = {
		message: "This is my app"
	};

});