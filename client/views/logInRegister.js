Template.logInRegister.events({
  'submit #login-form': function(e, t) {
    e.preventDefault();

    var username = t.find('#login-username').value
      , password = t.find('#login-password').value;

    Meteor.loginWithPassword(username, password);

    return false;
  }
});