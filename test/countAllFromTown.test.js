"use strict"
const countAllFromTown = require("../bootcamp-functions/countAllFromTown.js");
const assert = require("assert");

describe("countAllFromTown function from bootcamp", function(){

  it("should return 1 for Cape Town", function(){
    assert.equal(1, countAllFromTown("CA321654", "CA"));
  });

  it("should return 2 for BellVille", function(){
    assert.equal(2, countAllFromTown("CY987654, CY321321", "CY"));
  });

  it("should return 1 for Paarl out of 3 Registration Numbers", function(){
    assert.equal(1, countAllFromTown("CA654654, CY321321, CJ987987", "CJ"));
  });

  it("should return 2 for Cape Town out of 5 Registrtaion Numbers", function(){
    assert.equal(2, countAllFromTown("CA321321, CY987987, CA654654, CJ159159, CY156965", "CA"));
  });
});
