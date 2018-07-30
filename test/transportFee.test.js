"use strict"
const assert = require("assert");
const transportFee = require("../bootcamp-functions/transportFee.js");

describe("transportFee function from bootcamp", function(){

  it("should return R20 for morning", function(){
    assert.equal("R20", transportFee("morning"));
  });

  it("should return R10 for afternoon", function(){
    assert.equal("R10", transportFee("afternoon"));
  });

  it("should return free for nightshift", function(){
    assert.equal("free", transportFee("nightshift"));
      });

      it("should ask travel time input", function(){
        assert.equal("please input travel time", transportFee())
      })
})
