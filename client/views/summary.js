Template.summary.helpers({
  latestEntries: function () {
    var unsorted = [];
    var people = People.find();
    people.forEach( function(person) {
      var entry = (Entries.findOne({userId: person.userId}, {sort: {timestamp: -1}}));
      entry.firstName = person.first_name;
      entry.lastName  = person.last_name;
      unsorted.push(entry);
    });
    var result = _(unsorted).sortBy(function(entry) { return -entry.timestamp })
    return result;
  }
});