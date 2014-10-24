Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return [Meteor.subscribe('people'), Meteor.subscribe('entries')]; 
  }
});

Router.map(function() {
  this.route('summary', {path: '/'});
  this.route('userDetails', {path: '/user'});
  this.route('logInRegister', {path: '/login'})
});

var alreadySignedIn = function(pause) {
  if (Meteor.user()) {
    Router.go('summary');
    pause();
  }
};

Router.onBeforeAction('loading');
Router.onBeforeAction(alreadySignedIn, {only: ['logInRegister']});