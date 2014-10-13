Template.header.events({
  'click #sign-out-link': function(e) {
    Meteor.logout();
  }
});