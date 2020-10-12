const { expect } = require('@jest/globals')
const { reverse } = require('dns')
const reverseInt = require('./main.js')

describe("testing reverseInt function", ()=>{
    test("reverseInt(542) expect to be 245", ()=>{
        expect(reverseInt(542)).toBe(245)
    })

    test("reverseInt(100098) to be 890001", ()=>{
        expect(reverseInt(100098)).toBe(890001)
    })

    test("reverseInt(-90) to be -9", ()=>{
        expect(reverseInt(-90)).toBe(-9)
    })

    test("everseInt(-51) to be -15", ()=>{
        expect(reverseInt(-51)).toBe(-15)
    })
})