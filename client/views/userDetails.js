Template.userDetails.events({
  'submit form': function(e, t) {
    e.preventDefault();

    var _userId           = Meteor.userId()
      , _contentmentLevel = $('.ui.rating').rating('get rating')
      , _workAmount       = $('.ui.button.workamount.active').val()
      , _workingOn        = t.find('#name-of-project').value
      , _timestamp        = new Date().getTime();

    if      (_workAmount == "Less") { _workAmount = 1; }
    else if (_workAmount == "Same") { _workAmount = 2; }
    else if (_workAmount == "More") { _workAmount = 3; }

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
  
  $('.ui.button.workamount').click( function () {
    $('.ui.button.workamount').removeClass('active');
    $(this).addClass('active');
  });
}