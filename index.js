function findMatching(collection, search) {
  return collection.filter(function(el) {
    return el.toLowerCase() === search.toLowerCase();
  })
}


function fuzzyMatch(collection, search) {
  return collection.filter(function(el) {
    return el.startsWith(search);
  })
}

function matchName(collection, search) {
  return collection.filter(function(el) {
    return el.name === search;
  })
}
