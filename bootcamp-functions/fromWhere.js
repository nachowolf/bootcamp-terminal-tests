"use strict"
module.exports = function(plate) {

  if (plate.startsWith("CY")) {
    return "Bellville"
  }

  else if (plate.startsWith("CJ")) {
    return "Paarl"
  }

  else if (plate.startsWith("CA")) {
    return "Cape Town"
  }

  else{
    return "Some other place!"
  }
}
