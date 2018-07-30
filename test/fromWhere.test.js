"use strict"
const assert = require("assert");
const fromWhere = require("../bootcamp-functions/fromWhere.js");


describe("fromWhere function from bootcamp", function(){

  it("should return Bellville for CY321654", function(){
    assert.equal("Bellville", fromWhere("CY321654"));
  });

    it("should return Paarl for CJ321654", function(){
      assert.equal("Paarl", fromWhere("CJ321654"));
    });

      it("should return Cape Town for CA321654", function(){
        assert.equal("Cape Town", fromWhere("CA321654"));
      });

        it("should return some other place for CB321654", function(){
          assert.equal("Some other place!", fromWhere("CB321654"));
        });


})
