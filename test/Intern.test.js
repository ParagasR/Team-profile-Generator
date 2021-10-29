const { describe, it, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('getRole', () => {
    it(`should return the value 'Intern'`, () => {
        expect(new Intern().getRole()).toEqual('Intern');
    })
})

describe('getSchool', () => {
    it(`should return the value from the property school`, () => {
        expect(new Intern('Ryan', 0, 'ryan@email.com', 'DU').getSchool()).toEqual('DU')
    })
})