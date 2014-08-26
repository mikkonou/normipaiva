var userFixtures = [
  {
    username: 'janne',
    name: 'Janne Henriksson',
    contentmentLevel: 'low',
    workAmount: 'more',
    workingOn: 'KobraTK',
    updated: (new Date().getTime()) - 10e9
  },
  {
    username: 'mikko',
    name: 'Mikko Taavitsa',
    contentmentLevel: 'high',
    workAmount: 'more',
    workingOn: 'KobraTK',
    updated: (new Date().getTime()) - 10e7
  },
  {
    username: 'jussi',
    name: 'Jussi Pattitussi',
    contentmentLevel: 'average',
    workAmount: 'same',
    workingOn: 'KobraTK',
    updated: (new Date().getTime()) - 10e8
  },
  {
    username: 'kikka',
    name: 'Kikka Korea',
    contentmentLevel: 'low',
    workAmount: 'same',
    workingOn: 'KobraTK',
    updated: (new Date().getTime()) - (10e6 + 10e4)
  },
  {
    username: 'risto',
    name: 'Risto Autere',
    contentmentLevel: 'high',
    workAmount: 'less',
    workingOn: 'KobraTK',
    updated: (new Date().getTime()) - 10e5
  },
  {
    username: 'simo',
    name: 'Simo Kuassimo',
    contentmentLevel: 'average',
    workAmount: 'less',
    workingOn: 'KobraTK',
    updated: (new Date().getTime()) - 10e6
  },
  {
    username: 'ari',
    name: 'Ari Zwang',
    contentmentLevel: 'low',
    workAmount: 'less',
    workingOn: 'KobraTK',
    updated: (new Date().getTime()) - (Math.random() * 10e5)
  },
  {
    username: 'matti',
    name: 'Matti Näsä',
    contentmentLevel: 'high',
    workAmount: 'same',
    workingOn: 'KobraTK',
    updated: (new Date().getTime()) - (Math.random() * 10e4)
  },
  {
    username: 'mauno',
    name: 'Mauno Ahonen',
    contentmentLevel: 'average',
    workAmount: 'more',
    workingOn: 'KobraTK',
    updated: (new Date().getTime()) - (Math.random() * 10e3)
  },
  {
    username: 'timo',
    name: 'Timo Silakka',
    contentmentLevel: 'high',
    workAmount: 'more',
    workingOn: 'KobraTK',
    updated: (new Date().getTime()) - (Math.random() * 10e2)
  }
];

if (Meteor.users.find().count() === 0) {
  userFixtures.forEach( function(userFixture) {
    var newUserId = Accounts.createUser({
      username: userFixture.username,
      password: 'asdfasdf',
    });
    People.update({userId: newUserId},
      { $set:
        {
          userId: newUserId,
          name: userFixture.name,
          contentmentLevel: userFixture.contentmentLevel,
          workAmount: userFixture.workAmount,
          workingOn: userFixture.workingOn,
          updated: userFixture.updated
        }
      }
    );
  })
}