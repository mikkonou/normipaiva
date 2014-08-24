Template.workload.helpers({
  people: function () {
    return People.find({}, {sort: {updated: -1}});
  }
});