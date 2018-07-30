"use strict"
module.exports = function(a, b) {
  var plates = a.split(", ");

  var townPlates = [];

  for (var i = 0; i<plates.length; i++){
    var plate = plates[i];

  if (plate.startsWith(b)){
    townPlates.push(plate);

  }
  }
var result = townPlates.length;
 return result
}
