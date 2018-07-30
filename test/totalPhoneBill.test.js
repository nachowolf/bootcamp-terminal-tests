"use strict"
const assert = require("assert");
const totalPhoneBill = require("../bootcamp-functions/totalPhoneBill.js");

describe("totalPhoneBill function from bootcamp", function() {

  it("should return 0 for no calls or sms", function() {
    assert.equal("R0.00", totalPhoneBill(""));
  });

  it("should return R2.75 for 1 call", function() {
    assert.equal("R2.75", totalPhoneBill("call"));
  });

  it("should return R0.65 for 1 sms", function() {
    assert.equal("R0.65", totalPhoneBill("sms"));
  });

  it("should return R3.40 for 1 call and 1 sms", function() {
    assert.equal("R3.40", totalPhoneBill("call, sms"));
  });

  it("should return R4.05 for 1 call and 2 sms", function() {
    assert.equal("R4.05", totalPhoneBill("call, sms, sms"));
  });

  it("should return R5.50 for 2 calls", function() {
    assert.equal("R5.50", totalPhoneBill("call, call"));
  });

  it("should return R for 5 call", function() {
    assert.equal("R3.25", totalPhoneBill("sms, sms, sms, sms, sms"));
  });

})
