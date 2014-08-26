Template.summary.helpers({
  people: function () {
    return People.find({}, {sort: {updated: -1}});
  }
});