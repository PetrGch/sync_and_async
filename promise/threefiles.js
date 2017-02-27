'use strict';

var fs = require('fs');
var dirPath = __dirname + '/data/';

/********************************************************************/

// ЧИТАЕМ ТРИ АСИНХРОННЫЕ ФУНКЦИИ ПАРАЛЛЕЛЬНО (первый вариант)

var func_1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    fs.readFile(dirPath + '/data_1.json', 'utf-8', function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  }, 1000);
});

var func_2 = new Promise(function(resolve, reject) {
  fs.readFile(dirPath + '/data_2.json', 'utf-8', function(err, data) {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  })
});

var func_3 = new Promise(function(resolve, reject) {
  fs.readFile(dirPath + '/data_3.json', 'utf-8', function(err, data) {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  })
});

// var promise = Promise.all([func_1, func_2, func_3]).then(value => {
//   console.log(value);
// })

// второй вариант (задача 4 - promise.props)

Promise.props = function(obj) {
  var arr = [];
  for (let prop in obj) {
    arr.push(obj[prop]);
  }

  return Promise.all(arr);
}

Promise.props({
  file_1: func_1,
  file_2: func_2,
  file_3: func_3
}).then(console.error, console.log);
