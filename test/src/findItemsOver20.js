"use strict"
module.exports = function(a) {

  var itemsOver20 = [];

  for (var i=0; i<a.length; i++) {
    var items = a[i];



    if ( items.qty > 20){
      itemsOver20.push(items);
    }
  }
    return itemsOver20;
  }
