Template.logInRegister.helpers({
  showLoginFailedNotice: function () {
    if (Session.get("loginFailed")) {
      return 'warning';
    } else return '';
  },
  showRegistrationFailedNotice: function () {
    if (Session.get("registrationFailed")) {
      return 'warning';
    } else return '';
  },
  registrationFailedErrorMessage: function () {
      return Session.get("registrationErrorMessage");
  }
});

Template.logInRegister.events({
  'submit #login-form': function(e, t) {
    e.preventDefault();

    var username = t.find('#login-username').value
      , password = t.find('#login-password').value;

    Meteor.loginWithPassword(username, password, function(err) {
      if (err) { Session.set("loginFailed", true); } 
      else {
        Session.set("loginFailed", false);
        Router.go('summary');
      }
    });

    return false;
  },
  
  'submit #register-form': function(e, t) {
    e.preventDefault();

    var _firstName = t.find('#register-firstname').value
      , _lastName  = t.find('#register-lastname').value
      , _username  = t.find('#register-username').value
      , _password  = t.find('#register-password').value;

    Accounts.createUser({
      username: _username,
      password: _password,
      profile: {
        first_name: _firstName,
        last_name: _lastName
      }},
      function(err) {
        if (err) {
          Session.set("registrationFailed", true);
          Session.set("registrationErrorMessage", err.reason);
        }
        else {
          Session.set("registrationFailed", false);
          Session.set("registrationErrorMessage", "");
          Meteor.call('insertNewPerson', Meteor.user());
          Router.go('summary');
        }
      }
    );

    console.log(Meteor.user());
    return false;
  }
});

//Register form client side validation
//with Semantic UI form validation
Template.logInRegister.rendered = function () {
  $('#register-form')
  .form({
    firstName: {
      identifier  : 'register-firstname',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your first name'
        }
      ]
    },
    lastName: {
      identifier  : 'register-lastname',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your last name'
        }
      ]
    },
    username: {
      identifier : 'register-username',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a username'
        }
      ]
    },
    password: {
      identifier : 'register-password',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a password'
        },
        {
          type   : 'length[6]',
          prompt : 'Your password must be at least 6 characters'
        }
      ]
    }
  },
  {
    inline: 'true'
  });
}

//Reset notices if user navigates away from the page
Template.logInRegister.destroyed = function () {
  Session.set("loginFailed", false);
  Session.set("registrationFailed", false);
  Session.set("registrationErrorMessage", "");
}