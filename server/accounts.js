Accounts.onCreateUser(function(options, user) {
  People.insert({
    userId: user._id,
    name: user.username,
    contentmentLevel: 'average',
    workAmount: 'same',
    workingOn: '---',
    updated: new Date().getTime()
  })

  if (options.profile) { user.profile = options.profile; }
  return user;
});