"use strict"
const assert = require("assert");
const yearsAgo = require("../src/yearsAgo.js");

describe("yearsAgo function from bootcamp", function(){

  it("should return 0 years ago for 2018", function(){
    assert.equal(0, yearsAgo(2018))
  });

it("should return 5 years ago for 2013", function(){
  assert.equal(5, yearsAgo(2013))
});

it("should return 10 years ago for 2008", function(){
  assert.equal(10, yearsAgo(2008))
});

it("should return -2 years ago for 2020", function(){
  assert.equal(-2, yearsAgo(2020))
});

it("should return -7 years ago for 2025", function(){
  assert.equal(-7, yearsAgo(2025))
});
});
