//@ts-check

/**
 * 
 * @param {number} n1 first number
 * @param {number} n2 second number
 * @return {number} add two numbers 
 */
function add(n1, n2) {
    return n1 + n2
}

/**
 * add two params an object and string 
 * @param {number} n1
 * @param {number} n2
 * @returns {string}
 */
const addTwo = (n1, n2) => `that's the result ${n1}  ${n2}`

/// Custom types 


/** 
 * a new user object
 * @typedef {object} user
 * @property {number} id user id
 * @property {string} firstName user name
 * @property {string} lastName
 * @property {number} age
 * @property {boolean} isActive
*/

/**
 * @type {user}
 */
const myUser = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isActive: true
}