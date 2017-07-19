import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Messages = new Mongo.Collection('messages');

Meteor.startup(() => {
  // code to run on server at startup
  
});


Meteor.publish('messages', function tasksPublication() {
    return Messages.find();
});
