'use strict';

bmiApp.controller('MainCtrl', function ($scope, $location, $anchorScroll) {
    $scope.calculate = function (event) {
		var secondOp = Math.pow(event.height, 2.5);
		var firstOp = 5734 * event.weight;
		var soln = firstOp / secondOp;
		var roundedSoln = Math.round( soln * 10 ) / 10;
		
		
		$scope.result = roundedSoln;
	};
 
    $scope.reset = function(event) {
    	event.height = ' ',
    	event.weight = ' ',
      $scope.result = ' '};
 


	$scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }

   });
