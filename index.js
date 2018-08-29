// Code your solution in this file
const findMatching = (array, name) => {
  return array.filter ( x => x.toLowerCase() === name.toLowerCase())
}


const fuzzyMatch = (array, partialName) => {
  return array.filter (name => name.slice(0, 2) === partialName)
}

const matchName = (array, name) => {
  return array.filter (driver => driver.name === name )
}
