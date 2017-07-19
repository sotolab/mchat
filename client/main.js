import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

import './main.html';

/**
* Create new collection if not present.
*/
Messages = new Mongo.Collection('messages');

Meteor.subscribe('messages');

Template.messages.helpers({
  messages: messagesFunc,
  time: timeFunc
});

Template.newMessage.events({
  "submit form": createMessage
});

function messagesFunc() {
  return Messages.find({}, { sort: { 'time': -1 } });
}

function timeFunc(time) {
  return moment(time).format("HH:mm:ss");
}

function createMessage(evt) {
  Messages.insert({
    message: evt.target.message.value,
    time: new Date()
  });
  evt.target.message.value = '';
  return false;
}


