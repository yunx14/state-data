var fs = require('fs');
var stateLookupTable = require("../model/stateLookup");
var itemCodeLookupTable = require("../model/itemCodeLookup");
var input = fs.createReadStream('./model/rawdata/financialdata.txt');

var stateData = {};

function readLines(input, func) {
  var remaining = '';

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      func(line);
      index = remaining.indexOf('\n');
    }
  });

  input.on('end', function() {
    if (remaining.length > 0) {
      func(remaining);
    };
    var buff = Buffer.from(JSON.stringify(stateData));
    fs.writeFile('model/financialRecords.json', buff,  function(err) {
      if (err) {
        return console.error(err);
      }
    });
  });
}

function func(data) {
  var dateYear = data.substring(34, 36);
  var state = stateLookupTable[data.substring(0, 2)];
  var amount = data.substring(17, 32);
  var item = itemCodeLookupTable[data.substring(14, 17)];

  if (data.substring(0, 2) == 00) {
    return;
  }

  if(!stateData.hasOwnProperty("year")) {
    stateData.year = dateYear;
  }

  if (!stateData.hasOwnProperty(state)) {
    stateData[state] = {};
  }

  if (item != undefined) {
    stateData[state][item] = amount;
  } else {
    return;
  }

}

readLines(input, func);
