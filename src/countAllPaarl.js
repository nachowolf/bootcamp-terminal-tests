"use strict"
module.exports = function(a) {
  var plates = a.split(", ");

  var paarlPlates = [];

  for (var i = 0; i<plates.length; i++){
    var plate = plates[i];

  if (plate.startsWith("CJ")){
    paarlPlates.push(plate);

  }
  }
var result = paarlPlates.length;
 return result
}
