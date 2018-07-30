"use strict"
const assert = require("assert");
const findItemsOver20 = require("../src/findItemsOver20.js");

describe("findItemsOver20 function from bootcamp", function(){

  it("Should return the items over 20", function(){
    assert.deepEqual(findItemsOver20([{"name":"pears","qty":37},
                                      {"name":"bananas","qty":27},
                                      {"name":"apples","qty":14}]), [{"name":"pears","qty":37},{"name":"bananas","qty":27}] );
  });

it("should return an empty object", function(){
  assert.deepEqual(findItemsOver20([{"name":"pears","qty":12}]), []);

});

it("should return an empty object", function(){
  assert.deepEqual(findItemsOver20([{}]), []);
});

});
