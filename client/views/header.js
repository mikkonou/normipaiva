Template.header.events({
  'click #sign-out-link': function(e) {
    Meteor.logout();
    Router.go('summary');
  }
});