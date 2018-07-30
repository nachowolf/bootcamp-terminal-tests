"use strict"
const assert = require("assert");
const countRegNumber = require("./src/countRegNumber.js");

describe("countRegNumber function from bootcamp", function(){

  it("should return 1 registration number", function(){
    assert.equal( 1, countRegNumber("CA046464"));
  });

it("should return 3 registration numbers", function(){
  assert.equal(3, countRegNumber("CA05461, CA646296, CY6564364"))
})

it("should return 10 registration numbers", function(){
  assert.equal(10, countRegNumber("CA123456, CY321654, CJ456789, CA654321, CY123123, CY321321, CJ987987, CJ9798787, CY987987, CJ321321"))
})

});
