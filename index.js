// Write your solution in this file!
// Declare customerName to be 'bob' in global scope
var customerName = 'bob';

// Write a function that accesses the global customerName variable and uppercases it
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Write a function that overwrites the bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'new best customer';
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value
const leastFavoriteCustomer = 'someone';

// Write a function that attempts to change the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    // Trying to reassign a constant will result in an error
    // This line should throw an error
    leastFavoriteCustomer = 'new least favorite';
}

module.exports = {
    customerName,
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    leastFavoriteCustomer,
    changeLeastFavoriteCustomer,
};
