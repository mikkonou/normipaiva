Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('people'); }
});

Router.map(function() {
  this.route('workload', {path: '/'});
});

Router.onBeforeAction('loading');