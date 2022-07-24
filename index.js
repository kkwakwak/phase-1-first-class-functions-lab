// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers = function() {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function() {
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const quadruple = function(num) {
    return num * num
}
function createFareMultiplier(multipliedValue) {
    return function(value) {
        return value * multipliedValue
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
}

function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers)
}