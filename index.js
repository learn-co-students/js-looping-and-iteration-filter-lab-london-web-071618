// Code your solution in this file
function findMatching(driversArray, name) {
  return driversArray.filter(function (driversName) {
    return driversName.toLowerCase() === name.toLowerCase()
  })
}

// const findMatching = (driversArray, name) => {
//   return driversArray.filter( x => x.toLowerCase() === name.toLowerCase())
// }

function fuzzyMatch(driversArray, name) {
  return driversArray.filter(function(driversName) {
    return driversName.slice(0,2).includes(name)
  })
}

// const fuzzyMatch = (driversArray, partialName) => {
//   return driversArray.filter(name => name.slice(0,2) === partialName )
// }

function matchName(driversArray, name) {
  return driversArray.filter(function(nameMatch) {
    return nameMatch["name"] === name
  })
}
// 
// const matchName = (driversArray, name) => {
//   return driversArray.filter( driver => driver.name === name)
// }
