"use strict"
module.exports = function(a) {
  var callAndSms = a.split(", ");

  var smsAmt =  [];
  var callAmt = [];


  for (var i =0; i<callAndSms.length; i++){

    var sms = callAndSms[i];

    var call = callAndSms[i];


    if (sms.startsWith("sms")){
      smsAmt.push(sms);
    }
    if (call.startsWith("call")){
      callAmt.push(call);
      }
      }
      var smsResult = smsAmt.length * 0.65;
      var callResult = callAmt.length * 2.75;

     var result = callResult + smsResult ;
      return "R" + result.toFixed(2);
      };
