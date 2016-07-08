AllTasks = new Mongo.Collection("tasks");

AllTasks.allow({
	update: function(_id, doc) { return true; },
	insert: function(_id, doc) { return true; }, 
	remove: function(_id, doc) { return true; }
});