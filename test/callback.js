var fs = require('fs');
var dirPath = __dirname + '/data/';

function TwoFiles(arrayOfFunc, cb) {

  function next(err, data) {
    if (err || arrayOfFunc.length === 0) {
      cb(err, data)
    } else {
      var func = arrayOfFunc.shift();
      console.log(data);
      func(next);
    };

  }

  if (arrayOfFunc.length === 0) {
    cb();
  } else {
    var func = arrayOfFunc.shift();
    func(next);
  }

}

function cb(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
}

function first(next) {
  setTimeout(() => {
    next(null, 'first');
  }, 500);
}

function second(next) {
  setTimeout(() => {
    next(null, 'second');
  }, 1000);
}

TwoFiles([first, second], cb);
