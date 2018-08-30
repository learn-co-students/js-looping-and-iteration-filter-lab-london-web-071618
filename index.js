// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(function (driver) {return driver.toLowerCase() === name.toLowerCase()})
}

function fuzzyMatch(drivers, name){
  let lengthOfName = name.length
  return drivers.filter(function (l) {return l.slice(0, lengthOfName) === name})
}

function matchName(drivers, name){
  return drivers.filter(function(driver) {return driver.name === name})
}
