Template.personBox.helpers({
    workAmountGlyph: function () {
    if (this.workAmount == 'more') {
      return 'up icon';
    }
    else if (this.workAmount == 'same') {
      return 'checkmark icon';
    }
    else if (this.workAmount == 'less') {
      return 'down icon';
    }
  },
  level: function () {
    return this.contentmentLevel
  },
  lastUpdated: function () {
    return (this.updated / 1000).toString()
  },
  workingOn: function () {
    return this.workingOn
  }
})