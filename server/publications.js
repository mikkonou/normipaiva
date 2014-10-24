Meteor.publish('people', function() {
  return People.find();
});

Meteor.publish('entries', function () {
  return Entries.find();
})