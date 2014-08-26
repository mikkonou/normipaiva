var users = [
  {
    username: 'janne',
    name: 'Janne Henriksson',
    contentmentLevel: 'low',
    workAmount: 'more',
    workingOn: 'KobraTK',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e1)
  },
  {
    username: 'mikko',
    name: 'Mikko Taavitsa',
    contentmentLevel: 'high',
    workAmount: 'more',
    workingOn: 'KobraTK',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e2)
  },
  {
    username: 'jussi',
    name: 'Jussi Pattitussi',
    contentmentLevel: 'average',
    workAmount: 'same',
    workingOn: 'KobraTK',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e3)
  },
  {
    username: 'kikka',
    name: 'Kikka Korea',
    contentmentLevel: 'low',
    workAmount: 'same',
    workingOn: 'KobraTK',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e4)
  },
  {
    username: 'risto',
    name: 'Risto Autere',
    contentmentLevel: 'high',
    workAmount: 'less',
    workingOn: 'KobraTK',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e5)
  },
  {
    username: 'simo',
    name: 'Simo Kuassimo',
    contentmentLevel: 'average',
    workAmount: 'less',
    workingOn: 'KobraTK',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e6)
  },
  {
    username: 'ari',
    name: 'Ari Zwang',
    contentmentLevel: 'low',
    workAmount: 'less',
    workingOn: 'KobraTK',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e5)
  },
  {
    username: 'matti',
    name: 'Matti Näsä',
    contentmentLevel: 'high',
    workAmount: 'same',
    workingOn: 'KobraTK',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e4)
  },
  {
    username: 'mauno',
    name: 'Mauno Ahonen',
    contentmentLevel: 'average',
    workAmount: 'more',
    workingOn: 'KobraTK',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e3)
  },
  {
    username: 'timo',
    name: 'Timo Silakka',
    contentmentLevel: 'high',
    workAmount: 'more',
    workingOn: 'KobraTK',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e2)
  }
];

if (Meteor.users.find().count() === 0) {
  users.forEach( function(user) {
    var userId = Accounts.createUser({
      username: user.username,
      password: 'asdfasdf',
    });
    People.insert({
      id: userId,
      name: user.name,
      contentmentLevel: user.contentmentLevel,
      workAmount: user.workAmount,
      workingOn: user.workingOn,
      updated: user.updated
    })
  })
}