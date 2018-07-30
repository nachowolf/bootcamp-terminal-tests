"use strict"
module.exports = function(a) {


  var hardwareSales = 0;
  var outdoorSales = 0;
  var carpentrySales = 0;

  for (var i = 0; i < a.length; i++) {
    var list = a[i];

    var department = list.department;

    if (department == 'hardware' && list.sales > 0) {
     hardwareSales += list.sales;
      }

    if (department == 'outdoor' && list.sales > 0) {
      outdoorSales += list.sales;
    }

    if (department == 'carpentry'&& list.sales > 0) {
      carpentrySales += list.sales;

    }
  }
  if (hardwareSales > outdoorSales && hardwareSales > carpentrySales){
    return "hardware";
  }

  else if (outdoorSales > hardwareSales && outdoorSales > carpentrySales){
    return "outdoor";
  }

  else if (carpentrySales > hardwareSales && carpentrySales > outdoorSales){
    return "carpentry";
}

else if (outdoorSales === hardwareSales){
  return "hardware and outdoor";
}

else if (outdoorSales === carpentrySales){
  return "outdoor and carpentry";
}

else if (hardwareSales === carpentrySales){
  return "hardware and carpentry";
}

else {
  return "nothing";
}
};
