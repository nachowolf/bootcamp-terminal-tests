"use strict"
const assert = require("assert");
const mostProfitableDepartment = require("../bootcamp-functions/mostProfitableDepartment.js")

describe("mostProfitableDepartment function from bootcamp", function(){
  it("should return outdoor", function() {
    assert.equal(mostProfitableDepartment(
      [{ department: 'hardware', sales: 2000, day: 'Monday' },
      { department: 'outdoor', sales: 3000, day: 'Monday' },
      { department: 'carpentry', sales: 2400, day: 'Monday' },
      { department: 'hardware', sales: 3000, day: 'Tuesday' },
      { department: 'outdoor', sales: 5000, day: 'Tuesday' },
      { department: 'carpentry', sales: 722, day: 'Tuesday' },
      { department: 'hardware', sales: 450, day: 'Wednesday' },
      { department: 'outdoor', sales: 8507, day: 'Wednesday' },
      { department: 'carpentry', sales: 251, day: 'Wednesday' },
      { department: 'hardware', sales: 120, day: 'Thursday' },
      { department: 'outdoor', sales: 18007, day: 'Thursday' },
      { department: 'carpentry', sales: 610, day: 'Thursday' },
      { department: 'hardware', sales: 700, day: 'Friday' },
      { department: 'outdoor', sales: 12006, day: 'Friday' },
      { department: 'carpentry', sales: 161, day: 'Friday' },]
    ), "outdoor")
  })

  it("should return hardware", function() {
    assert.equal(mostProfitableDepartment(
      [{ department: 'hardware', sales: 2000, day: 'Monday' },
      { department: 'outdoor', sales: 300, day: 'Monday' },
      { department: 'carpentry', sales: 240, day: 'Monday' },
      { department: 'hardware', sales: 3000, day: 'Tuesday' },
      { department: 'outdoor', sales: 500, day: 'Tuesday' },
      { department: 'carpentry', sales: 722, day: 'Tuesday' },]
    ), "hardware")
  })

  it("should return carpentry", function() {
    assert.equal(mostProfitableDepartment(
      [{ department: 'hardware', sales: 200, day: 'Monday' },
      { department: 'outdoor', sales: 300, day: 'Monday' },
      { department: 'carpentry', sales: 2400, day: 'Monday' },
      { department: 'hardware', sales: 300, day: 'Tuesday' },
      { department: 'outdoor', sales: 500, day: 'Tuesday' },
      { department: 'carpentry', sales: 7220, day: 'Tuesday' },]
    ), "carpentry")
  })

  it("should return hardware and carpentry", function() {
    assert.equal(mostProfitableDepartment(
      [{ department: 'hardware', sales: 2000, day: 'Monday' },
      { department: 'outdoor', sales: 300, day: 'Monday' },
      { department: 'carpentry', sales: 2000, day: 'Monday' },
      { department: 'hardware', sales: 3000, day: 'Tuesday' },
      { department: 'outdoor', sales: 500, day: 'Tuesday' },
      { department: 'carpentry', sales: 3000, day: 'Tuesday' },]
    ), "hardware and carpentry")
  })

  it("should return hardware and outdoor", function() {
    assert.equal(mostProfitableDepartment(
      [{ department: 'hardware', sales: 2000, day: 'Monday' },
      { department: 'outdoor', sales: 2000, day: 'Monday' },
      { department: 'carpentry', sales: 200, day: 'Monday' },
      { department: 'hardware', sales: 3000, day: 'Tuesday' },
      { department: 'outdoor', sales: 3000, day: 'Tuesday' },
      { department: 'carpentry', sales: 300, day: 'Tuesday' },]
    ), "hardware and outdoor")
  })

  it("should return outdoor and carpentry", function() {
    assert.equal(mostProfitableDepartment(
      [{ department: 'hardware', sales: 200, day: 'Monday' },
      { department: 'outdoor', sales: 2000, day: 'Monday' },
      { department: 'carpentry', sales: 2000, day: 'Monday' },
      { department: 'hardware', sales: 300, day: 'Tuesday' },
      { department: 'outdoor', sales: 3000, day: 'Tuesday' },
      { department: 'carpentry', sales: 3000, day: 'Tuesday' },]
    ), "outdoor and carpentry")
  })

})
