Template.personBox.helpers({
  name: function () {
    return (this.firstName + ' ' + this.lastName);
  },
  workAmountGlyph: function () {
    if (this.workAmount == 3) {
      return 'up icon';
    }
    else if (this.workAmount == 2) {
      return 'checkmark icon';
    }
    else if (this.workAmount == 1) {
      return 'down icon';
    }
  },
  level: function () {
    if (this.contentmentLevel >= 7) {
      return 'high';
    }
    else if (this.contentmentLevel > 3 && this.contentmentLevel < 7 ) {
      return 'average';
    }
    else if (this.contentmentLevel <= 3) {
      return 'low';
    }
  },
  lastUpdated: function () {
    return (this.timestamp / 1000).toString()
  },
  workingOn: function () {
    return this.workingOn
  }
})