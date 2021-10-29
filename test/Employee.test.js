const { expect, describe, it } = require('@jest/globals');
const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('Initialization', () => {
        it(`should return an object 'Employee' with a string value to the property 'name' when called with the new keyword.`, () => {
            expect(new Employee('Ryan').name).toEqual('Ryan');
        });

        it(`should return an object 'Employee' with a number value to the property 'id' when called with the new keyword.`, () => {
            expect(new Employee('Ryan', 1).id).toEqual(1);
        })
        it(`should return an object 'Employee' with a string value to the property 'email' when called with the new keyword.`, () => {
            expect(new Employee('Ryan', 1, 'ryan@email.com').email).toEqual('ryan@email.com');
        })
        it(`should return an object 'Employee' with the value 'Employee' to the property 'role' when called with the new keyword.`, () => {
            expect(new Employee().role).toEqual('Employee');
        })
    });

    describe('getName', () => {
        it(`should return the property 'name'`, () => {
            expect(new Employee('Ryan').getName()).toEqual('Ryan');
        })
    })

    describe('getId', () => {
        it(`should return the property 'id'`, () => {
            expect(new Employee('Ryan', 1).getId()).toEqual(1);
        })
    })

    describe('getEmail', () => {
        it(`should return the property 'email'`, () => {
            expect(new Employee('Ryan', 1, 'ryan@email.com').getEmail()).toEqual('ryan@email.com');
        })
    })

    describe('getEmail', () => {
        it(`should return the property 'role'`, () => {
            expect(new Employee().role).toEqual('Employee');
        })
    })
})