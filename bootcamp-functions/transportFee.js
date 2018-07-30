"use strict"
module.exports = function(pay) {
  switch(pay){
    case "morning":
      return "R20";

    case "afternoon":
      return "R10";

    case "nightshift":
      return "free";

    default:
      return "please input travel time";
            }
};
