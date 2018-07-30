"use strict"
const assert = require("assert");
const regCheck = require("../src/regCheck");

describe("regCheck function from bootcamp", function(){

  it("should return true for  054 054 DB and DB", function(){
    assert.equal(true, regCheck("054 054 DB", "DB"));
  });

  it("should return false for CA022161 and MP", function(){
    assert.equal(false, regCheck("CA022161", "MP"));
  });

  it("should return false for CY513103 and DB", function(){
    assert.equal(false, regCheck("CY513103", "DB"));
  });

  it("should return false for 123 HJK DB and MP", function(){
    assert.equal(false, regCheck("123 HJK DB", "MP"))
  });
});
