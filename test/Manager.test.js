const { it, expect } = require('@jest/globals')
const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')

describe('getRole', () => {
    it(`should return the value 'Manager' from the role property`, () => {
        expect(new Manager().getRole()).toEqual('Manager');
    })
})

describe('getOfficeNumber', () => {
    it(`should return the value from the officeNumber property`, () => {
        expect(new Manager('Ryan', 0, 'ryan@email.com', 1).getOfficeNumber()).toEqual(1);
    })
})