// Code your solution in this file
// function findMatching (collection, driver) { 
//     let container = []
//         for (const item of collection) {
//             if (item.toLowerCase() === driver.toLowerCase()) {
//                 container.push(driver)
//             }
//         }
//         return container
//     }

// [1, 2, 3, 4, 5].filter(function (num) { return num > 3; });
function findMatching (drivers, driverName) {
    return drivers.filter(function (driver) { return driver.toLowerCase() === driverName.toLowerCase() });
}

function fuzzyMatch (drivers, driverName) {
    return drivers.filter(function (driver) { return driver.charAt(0) === driverName.charAt(0)});
}

function matchName (drivers, driverName) {
    return drivers.filter(function (driver) { return driver.name === driverName});
}