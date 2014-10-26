Template.userDetails.events({
  'submit form': function(e) {
    e.preventDefault();

    var _userId           = Meteor.userId()
      , _contentmentLevel = $('.ui.rating').rating('get rating')
      , _workAmount       = $('.ui.button.workamount.active').attr('id')
      , _workingOn        = $('#name-of-project').val()
      , _timestamp        = new Date().getTime();

    if      (_workAmount == 'button-less') { _workAmount = 1; }
    else if (_workAmount == 'button-same') { _workAmount = 2; }
    else if (_workAmount == 'button-more') { _workAmount = 3; }

    Entries.insert({
      userId: _userId,
      contentmentLevel: _contentmentLevel,
      workAmount: _workAmount,
      workingOn: _workingOn,
      timestamp: _timestamp
    });

    Router.go('summary');
  },

  'click .ui.button.workamount': function(e) {
    console.log(e);
    $('.ui.button.workamount').not(e.target).removeClass('active');
    $(e.target).addClass('active');
  }
});

Template.userDetails.rendered = function () {
  $('.ui.rating').rating('enable');
  $('.ui.rating').rating('set rating', '5');

  //Semantic UI client side validation
  $('#new-entry-form')
  .form({
    workingOn: {
      identifier  : 'name-of-project',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please let us know what you are working on'
        }
      ]
    }
  },
  {
    inline: 'true'
  });
}