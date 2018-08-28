// Code your solution in this file
function findMatching(driversArray, name) {
  return driversArray.filter(function (driversName) {
    return driversName.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(driversArray, name) {
  return driversArray.filter(function(driversName) {
    return driversName.slice(0,2).includes(name)
  })
}

function matchName(driversArray, name) {
  return driversArray.filter(function(nameMatch) {
    return nameMatch["name"] === name
  })
}
