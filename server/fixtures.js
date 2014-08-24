if (People.find().count() === 0) {
  People.insert({
    name: 'Janne Henriksson',
    contentmentLevel: 'low',
    workAmount: 'more',
    workingOn: 'KobraTK',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e1)
  });

  People.insert({
    name: 'Mikko Taavitsa',
    contentmentLevel: 'high',
    workAmount: 'more',
    workingOn: 'KobraTK',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e2)
  });

  People.insert({
    name: 'Jussi Pattitussi',
    contentmentLevel: 'average',
    workAmount: 'same',
    workingOn: 'KobraTK',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e3)
  });

  People.insert({
    name: 'Kikka Korea',
    contentmentLevel: 'low',
    workAmount: 'same',
    workingOn: 'KobraTK',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e4)
  });

  People.insert({
    name: 'Risto Autere',
    contentmentLevel: 'high',
    workAmount: 'less',
    workingOn: 'KobraTK',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e5)
  });

  People.insert({
    name: 'Suntio Simo Kuassimo',
    contentmentLevel: 'average',
    workAmount: 'less',
    workingOn: 'KobraTK',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e6)
  });

  People.insert({
    name: 'Ari Zwang',
    contentmentLevel: 'low',
    workAmount: 'less',
    workingOn: 'KobraTK',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e5)
  });

  People.insert({
    name: 'Matti Näsä',
    contentmentLevel: 'high',
    workAmount: 'same',
    workingOn: 'KobraTK',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e4)
  });

  People.insert({
    name: 'Mauno Ahonen',
    contentmentLevel: 'average',
    workAmount: 'more',
    workingOn: 'KobraTK',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e3)
  });

  People.insert({
    name: 'Timo Silakka',
    contentmentLevel: 'high',
    workAmount: 'more',
    workingOn: 'KobraTK',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e2)
  });
}