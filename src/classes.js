//@ts-check

/**
 * @example 
 * const newProgrammer = new Programmer({fullName:'dave'}, 'javaScrip')
 * 
 * class to create a programmer user
 * @see https://github.com/
 * @todo implement the rest of methods
 */
class Programmer {

    /**
     * @param {{fullName: string}} user
     * @param {string} language
     */
    constructor(user, language) {
        this.fullName = user.fullName
        this.language = language
    }
    /**
     *  getInfo programmer information 
     * @returns {void}
     */
    getInfo() {
        console.log(`I'm ${this.fullName} and my favorite language is ${this.language}`)
    }
}

const programmer = new Programmer({ fullName: 'dave toro' }, 'js')
const programmer2 = new Programmer({ fullName: 'ryan rey' }, 'java')

programmer.getInfo()
programmer2.getInfo()