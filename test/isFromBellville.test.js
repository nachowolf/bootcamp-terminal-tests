"use strict"
const assert = require("assert");
const isFromBellville = require("../src/isFromBellville");

describe("isFromBellville function", function() {

  it("should return true for a registration number from Bellville", function() {

    assert.equal(true, isFromBellville("CY254654"));
  });

  it("should return false for a registration from Cape Town", function() {
    assert.equal(false, isFromBellville("CA012578"));
  });

  it("should return false for a registration number from Paarl", function() {
    assert.equal(false, isFromBellville("CJ654987"));
  });

});
