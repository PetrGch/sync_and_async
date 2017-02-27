var fs = require('fs');
var dirPath = __dirname + '/data/';

/********************************************************************/

// ЧИТАЕМ ДВЕ АСИНХРОННЫЕ ФУНКЦИИ ПАРАЛЛЕЛЬНО (перывй вариант)

var func_1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    fs.readFile(dirPath + '/data_1.json', 'utf-8', function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  }, 3000);
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

// Promise.all([func_1, func_2]).then(value => {
//   console.log(value);
// });

// Второй вариант - задание 3

function readFile(fileName) {
  fs.readFile(dirPath + fileName, 'utf-8', function(err, data) {
    if (err) throw err;
    console.log(data);
  });
}

function paralReadFile(fileName) {
  return Promise.all(fileName.map(readFile));
}

paralReadFile(['data_1.json', 'data_2.json']);
