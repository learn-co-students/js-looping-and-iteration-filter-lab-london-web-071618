// Code your solution in this file
function findMatching(collection, name){
  
  return collection.filter(function(driver) {
    return driver.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(collection, stringToMatch) {
  return collection.filter(function(driver) {
    return driver.slice(0, stringToMatch.length) === stringToMatch
  })
}

function matchName(collection, stringToMatch) {
  return collection.filter(function(driver) {
    return driver.name === stringToMatch
  })
}