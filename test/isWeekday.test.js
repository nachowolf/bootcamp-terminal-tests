"use strict"
const assert = require("assert");
const isWeekday = require("./src/isWeekday.js");

describe("isWeekday function from bootcamp", function(){

  it("should return true for Monday", function(){
    assert.equal(true, isWeekday("Monday"))
  });

  it("should return true for Tuesday", function(){
    assert.equal(true, isWeekday("Tuesday"))
  });

  it("should return true for Wednesday", function(){
    assert.equal(true, isWeekday("Wednesday"))
  });

  it("should return true for Thursday", function(){
    assert.equal(true, isWeekday("Thursday"))
  });

  it("should return true for Friday", function(){
    assert.equal(true, isWeekday("Friday"))
  });

  it("should return true for Saturday", function(){
    assert.equal(false, isWeekday("Sunday"))
  });

  it("should return true for Monday", function(){
    assert.equal(false, isWeekday("Sunday"))
  });

});
