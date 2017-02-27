'use strict';

var fs = require('fs');
var dirPath = __dirname + '/data/';

var promise_1 = new Promise(function(resolve, reject) {
  fs.readFile(dirPath + '/data_1.json', 'utf-8', function(err, data) {
    if (err) {
      reject(err);
    } else {
      resolve(data);
      // console.log(data);
    }
  })
});

var promise_2 = new Promise(function(resolve, reject) {
  fs.readFile(dirPath + '/data_2.json', 'utf-8', function(err, data) {
    if (err) {
      reject(err);
    } else {
      resolve(data);
      // console.log(data);
    }
  })
});

var promise_3 = new Promise(function(resolve, reject) {
  fs.readFile(dirPath + '/data_1.json', 'utf-8', function(err, data) {
    if (err) {
      reject(err);
      // console.log(err);
    } else {
      resolve(data);
      // console.log(data);
    }
  })
});

Promise.props = function(obj) {
  var arr = [];
  for (let prop in obj) {
    arr.push(obj[prop]);
  }

  return Promise.all(arr);
}

Promise.props({
  file_1: promise_1,
  file_2: promise_2,
  file_3: promise_3
}).then(console.error, console.log);
