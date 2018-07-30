"use strict"
const assert = require("assert")
const countAllPaarl = require("../bootcamp-functions/countAllPaarl")

describe("countAllPaarl function from bootcamp", function(){

it("should return 0 for CA123456", function(){
  assert.equal(0, countAllPaarl("CA123456"))
})

it("should return 0 for CY321654", function(){
  assert.equal(0, countAllPaarl("CY321654"))
})

it("should return 0 for 2 registration numbers not from Paarl", function(){
  assert.equal(0, countAllPaarl("CA123456, CY654321"))
})

it("should return 1 for CJ789456", function(){
  assert.equal(1, countAllPaarl("CJ789456"))
})

it("should return 2 for Paarl", function(){
  assert.equal(2, countAllPaarl("CJ123654, CJ789654"))
})

it("should only count 1 for Paarl", function(){
  assert.equal(1, countAllPaarl("CJ123456, CA123456"))
})

it("should only count 2 for Paarl", function(){
  assert.equal(2, countAllPaarl("CJ321654, CA9876445, CY456789, CJ357159"))
})

})
