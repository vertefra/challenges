const { expect } = require('@jest/globals')
const reverseInt = require('./main.js')

describe("testing reverseInt function", ()=>{
    test("reverseInt(542) expect to be 245", ()=>{
        expect(reverseInt(542)).toBe(245)
    })

    test("reverseInt(100098) to be 890001", ()=>{
        expect(reverseInt(100098)).toBe(890001)
    })
})