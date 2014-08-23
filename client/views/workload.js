var peopleData = [
  {
    name: 'Janne Henriksson',
    contentmentLevel: 'low',
    workAmount: 'more',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e1)
  },
  {
    name: 'Mikko Taavitsa',
    contentmentLevel: 'high',
    workAmount: 'more',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e2)
  },
  {
    name: 'Jussi Pattitussi',
    contentmentLevel: 'average',
    workAmount: 'same',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e3)
  },
  {
    name: 'Kikka Korea',
    contentmentLevel: 'low',
    workAmount: 'same',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e4)
  },
  {
    name: 'Risto Autere',
    contentmentLevel: 'high',
    workAmount: 'less',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e5)
  },
  {
    name: 'Suntio Simo Kuassimo',
    contentmentLevel: 'average',
    workAmount: 'less',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e6)
  },
  {
    name: 'Ari Zwang',
    contentmentLevel: 'low',
    workAmount: 'less',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e5)
  },
  {
    name: 'Matti Näsä',
    contentmentLevel: 'high',
    workAmount: 'same',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e4)
  },
  {
    name: 'Mauno Ahonen',
    contentmentLevel: 'average',
    workAmount: 'more',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e3)
  },
  {
    name: 'Timo Silakka',
    contentmentLevel: 'high',
    workAmount: 'more',
    updated: (new Date().getTime() / 1000) - (Math.random() * 10e2)
  }
];

Template.workload.helpers({
  people: peopleData
});