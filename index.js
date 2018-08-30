// Code your solution in this file



function findMatching(drivers, person){
  return drivers.filter(user=>user.toLowerCase() === person.toLowerCase())
}

function fuzzyMatch(drivers, person){
  return drivers.filter(user=>user[0][0] === person[0][0])
}
function matchName(drivers, person){
  return drivers.filter(user => user.name === person)
}
