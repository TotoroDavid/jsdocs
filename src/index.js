//@ts-check

/** 
 * 
 * Array of user's age
 * @type {Array<number>}
 */
const age = [19, 20, 30, 100]


/**
 * array of number and strings
 * @type {Array<number | string>}
 */
const scoresAndString = [1, '10', '30', 3000]

//objects

/**
 * @type {{id: number, firstName:string, lastName: string, age: number}}
 */
const person = { id: 1, firstName: 'John', lastName: 'Doe', age: 30 }

/**
 * @type {{id: number | string, firstName: string, lastName: string, age: number|string}}
 */
const person2 = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 30
}

/**
 * @type {second<string | number>}
 * @param {string} x
 * @param {number} y
 */
const second = (x, y) => {
    return x + y
}

second('dave', 3)