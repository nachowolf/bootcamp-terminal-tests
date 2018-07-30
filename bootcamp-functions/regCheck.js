"use strict"
module.exports = function(plate, prov) {
  var car = plate.endsWith(prov);

  return car;
};
