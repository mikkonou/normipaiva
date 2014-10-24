var userFixtures = [
  {
    username: 'janne',
    firstName: 'Janne',
    lastName: 'Henriksson',
  },
  {
    username: 'mikko',
    firstName: 'Mikko',
    lastName: 'Taavitsa',
  },
  {
    username: 'jussi',
    firstName: 'Jussi',
    lastName: 'Pattitussi',
  },
  {
    username: 'kikka',
    firstName: 'Kikka',
    lastName: 'Korea',
  },
  {
    username: 'risto',
    firstName: 'Risto', 
    lastName: 'Autere',
  },
  {
    username: 'simo',
    firstName: 'Simo',
    lastName: 'Kuassimo',
  },
  {
    username: 'ari',
    firstName: 'Ari',
    lastName: 'Zwang',
  },
  {
    username: 'matti',
    firstName: 'Matti',
    lastName: 'Näsä',
  },
  {
    username: 'mauno',
    firstName: 'Mauno',
    lastName: 'Ahonen',
  },
  {
    username: 'timo',
    firstName: 'Timo',
    lastName: 'Silakka',
  }
];

var contentmentValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var workAmountValues  = [1, 2, 3];
var workingOnValues   = ['Saumaton Oy', 
                         'Jankon Betoni', 
                         'Foobar/Quux integration']

if (Meteor.users.find().count() === 0) {
  userFixtures.forEach( function(userFixture) {
    var newUserId = Accounts.createUser({
      username: userFixture.username,
      password: 'asdfasdf',
      profile: {
        first_name: userFixture.firstName,
        last_name: userFixture.lastName
      }
    });
    People.insert({
      userId: newUserId,
      first_name: userFixture.firstName,
      last_name: userFixture.lastName
    });
    Entries.insert({
      userId: newUserId,
      contentmentLevel: contentmentValues[Math.floor(Math.random() * 9)],
      workAmount: workAmountValues[Math.floor(Math.random() * 3)],
      workingOn: workingOnValues[Math.floor(Math.random() * 3)],
      timestamp: (new Date().getTime()) - (Math.random() * Math.pow(10, (Math.floor(Math.random() * 9) + 1)))
    });
  })
}