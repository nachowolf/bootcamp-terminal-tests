"use strict"
module.exports = function(b, c) {
   var itemsOver30 = [];

  for (var i=0; i<b.length; i++) {
    var items = b[i];



    if ( items.qty > c){
      itemsOver30.push(items);
    }
  }
    return itemsOver30;
}
