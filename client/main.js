import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
angular.module('toDoList', [angularMeteor])
.controller('MainCtrl', 
	function($scope, $reactive) {
		'ngInject';
		// $scope.var1 = 'Hello world';

    $reactive(this).attach($scope);
    
    this.helpers({
      tasks() {
        return AllTasks.find({});
      }
    });

	}
);