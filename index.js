// Code your solution in this file
function findMatching(collection, name) {
  return collection.filter(function (nameMatch) {
      return nameMatch.toLowerCase() === name.toLowerCase();
  })
}


function fuzzyMatch(collection, nameLetters) {
  return collection.filter(function (name) {
    return name.slice(0,2).includes(nameLetters);
  })
}


function matchName(collection, name) {
  return collection.filter(function (entry) {
    return entry["name"] === name;
  })
}


const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];
