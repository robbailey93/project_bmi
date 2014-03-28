'use strict';


var bmiApp = angular.module('projectbmiApp', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
      .state('main', {
        url: '/',
		templateUrl: 'views/main.html',
        controller: 'MainCtrl'
       	
	})
      .state('lowerbmi', {
        url: 'views/lowerbmi',
		templateUrl: 'views/lowerbmi.html',
        controller: 'AffiliateCtrl'
    });
});