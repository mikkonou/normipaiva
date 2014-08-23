var peopleData = [
  {
    name: 'Janne Henriksson',
    contentmentLevel: 'low',
    workAmount: 'more'
  },
  {
    name: 'Mikko Taavitsa',
    contentmentLevel: 'high',
    workAmount: 'more'
  },
  {
    name: 'Jussi Pattitussi',
    contentmentLevel: 'average',
    workAmount: 'same'
  },
  {
    name: 'Kikka Korea',
    contentmentLevel: 'low',
    workAmount: 'same'
  },
  {
    name: 'Risto Autere',
    contentmentLevel: 'high',
    workAmount: 'less'
  },
  {
    name: 'Suntio Simo Kuassimo',
    contentmentLevel: 'average',
    workAmount: 'less'
  },
  {
    name: 'Ari Zwang',
    contentmentLevel: 'low',
    workAmount: 'less'
  },
  {
    name: 'Matti Näsä',
    contentmentLevel: 'high',
    workAmount: 'same'
  },
  {
    name: 'Mauno Ahonen',
    contentmentLevel: 'average',
    workAmount: 'more'
  },
  {
    name: 'Timo Silakka',
    contentmentLevel: 'high',
    workAmount: 'more'
  }
];

Template.workload.helpers({
  people: peopleData
});