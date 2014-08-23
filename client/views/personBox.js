Template.personBox.helpers({
    workAmountGlyph: function () {
    if (this.workAmount == 'more') {
      return 'glyphicon glyphicon-arrow-up';
    }
    else if (this.workAmount == 'same') {
      return 'glyphicon glyphicon-ok';
    }
    else if (this.workAmount == 'less') {
      return 'glyphicon glyphicon-arrow-down';
    }
  },
  level: function () {
    return this.contentmentLevel
  },
  lastUpdated: function () {
    return this.updated.toString()
  },
  workingOn: function () {
    return this.workingOn
  }
})