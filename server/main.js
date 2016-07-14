import { Meteor } from 'meteor/meteor';

// Code to run on server at startup
Meteor.startup(() => {

	// Meteor.users.remove({},{justOne: false});	// Truncate collection
	AllTasks.remove({},{justOne: false});		// Truncate collection
  	
  	if (!AllTasks.findOne()) {
  		var dataIni = [
  			{ name: 'Task1', description: 'this is a tough task 1', done: false },
  			{ name: 'Task2', description: 'this is a tough task 2', done: true  },
  			{ name: 'Task3', description: 'this is a tough task 3', done: false },
  			{ name: 'Task4', description: 'this is a tough task 4', done: false }
  		];

		  dataIni.forEach(function(task) { AllTasks.insert(task); });
		  console.log('All data initialized');

  	}

});
