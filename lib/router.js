Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('people'); }
});

Router.map(function() {
  this.route('summary', {path: '/'});
  this.route('userDetails', {path: '/userDetails'});
  this.route('logInRegister', {path: '/logIn'})
});

Router.onBeforeAction('loading');