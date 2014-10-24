Template.userDetails.events({
  'submit form': function(e, t) {
    e.preventDefault();

    var _userId           = Meteor.userId()
      , _contentmentLevel = $('.ui.rating').rating('get rating')
      , _workAmount       = $('.ui.button.active').val()
      , _workingOn        = t.find('#name-of-project').value
      , _timestamp        = new Date().getTime();

    Entries.insert({
      userId: _userId,
      contentmentLevel: _contentmentLevel,
      workAmount: _workAmount,
      workingOn: _workingOn,
      timestamp: _timestamp
    });

    Router.go('summary');
  }
});

Template.userDetails.rendered = function () {
  $('.ui.rating').rating('enable');
  $('.ui.rating').rating('set rating', '5');
  
  $('.ui.button').click( function () {
    $('.ui.button').removeClass('active');
    $(this).addClass('active');
  });
}