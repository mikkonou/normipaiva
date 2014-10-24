Meteor.methods({
  insertNewPerson: function (userObject) {
    People.insert({
      userId: userObject._id,
      first_name: userObject.profile.first_name,
      last_name: userObject.profile.last_name
    });
  }
});