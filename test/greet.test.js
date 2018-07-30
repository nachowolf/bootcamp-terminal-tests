"use strict"
const assert = require("assert");
const greet = require("../bootcamp-functions/greet");

describe("The greet function", function(){

    it("should greet Andrew correctly", function(){
        assert.equal("Hello, Andrew", greet("Andrew"));
});

    it("should greet Karen correctly", function(){
        assert.equal("Hello, Karen", greet("Karen"));
})

it("should greet Todd correctly", function(){
    assert.equal("Hello, Todd", greet("Todd"));
})

});
