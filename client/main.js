import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular.module('toDoList', [angularMeteor])
.controller('MainCtrl',
	function($scope, $reactive) {
		'ngInject';
		// $scope.var1 = 'Hello world';

    $scope.detMode = 'show';

    $reactive(this).attach($scope);

    this.helpers({
      tasks() {
        return AllTasks.find({});
      }
    });

    // Object to handle actions (add / edit / delete) to one item of the list
    $scope.itemHandler = (function() {
      var itemHandler = {};

      itemHandler.task = {};

      // Prepare the panel to add a new item
      itemHandler.showAddPanel = function() {
        $scope.detMode = 'add';

      };

      // Prepare the panel to edit a new item
      itemHandler.showEditPanel = function(task) {
        $scope.detMode = 'edit';
        this.task = angular.copy(task);
        this.listItemReference = task;
      };

      // Add new item
      itemHandler.add = function() {

        AllTasks.insert(this.task);
        // AllTasks.insert({
        //   name        : this.task.name,
        //   description : this.task.description,
        //   done        : this.task.done
        // });
        $scope.itemHandler.showEditPanel(this.task);
      };

      // Remove an item
      itemHandler.remove = function() {
        AllTasks.remove({ _id: this.task._id });
        this.cancel();
      };

      // Update an item
      itemHandler.update = function() {
        AllTasks.update(
          {  _id: this.task._id },
          { $set: task }
        );
      };

      // Cancel the details panell
      itemHandler.cancel = function() {
        $scope.detMode = 'show';
        this.task = {};
      };

      return itemHandler;

    }());


	}
);
