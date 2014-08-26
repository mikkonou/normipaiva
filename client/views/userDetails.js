Template.userDetails.events({
  'submit form': function(e) {
    e.preventDefault();

    var details = {
      newWorkAmount: $(e.target).find('[name=workAmountInput]').val(),
      newContentmentLevel: $(e.target).find('[name=contentmentLevelInput]').val(),
      newWorkingOn: $(e.target).find('[name=workingOnInput]').val()
    }

    var person = People.findOne({userId: Meteor.user()._id});

    People.update( {_id: person._id}, 
      { $set: 
        {
          contentmentLevel: details.newContentmentLevel,
          workAmount: details.newWorkAmount,
          workingOn: details.newWorkingOn,
          updated: new Date().getTime()
        }
      }
    );

    Router.go('summary');
  }
});