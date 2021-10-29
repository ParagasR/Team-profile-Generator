const { describe, it, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('getRole', () => {
    it(`should return the value 'Engineer'`, () => {
        expect(new Engineer().getRole()).toEqual('Engineer')
    })
})

describe('getGithub', () => {
    it(`should return the value from the property 'github'`, () => {
        expect(new Engineer('Ryan', 0, 'ryan@email.com', 'gitHubRyan').getGithub()).toEqual('gitHubRyan')
    })
})