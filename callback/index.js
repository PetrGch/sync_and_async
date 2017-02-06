var fs = require('fs');
var dirPath = __dirname + '/data/';

var twoFiles = require('./twofiles');
var twoFilesParal = require('./twofilesparal');
var threeFiles = require('./threefiles');
var twoOneFiles = require('./twoonefiles');

// ЧИТАЕМ ДВЕ АСИНХРОННЫЕ ФУНКЦИИ ПОСЛЕДОВАТЕЛЬНО

twoFiles(function(err, data) {
  if (err) throw err;

  // console.log(JSON.parse(data));
});

// ЧИТАЕМ ДВЕ АСИНХРОННЫЕ ФУНКЦИИ ПАРАЛЛЕЛЬНО


twoFilesParal(function(err, data) {
  if (err) throw err;

  // console.log(JSON.parse(data));
});

// ЧИТАЕМ ТРИ АСИНХРОННЫЕ ФУНКЦИИ ПАРАЛЛЕЛЬНО

threeFiles(function(err, data) {
  if (err) throw err;

  // console.log(JSON.parse(data));
});

// ЧИТАЕМ ДВЕ АСИНХРОННЫЕ ФУНКЦИИ ПАРАЛЛЕЛЬНО и ТРЕТЬЮ ПОСЛЕДОВАТЕЛЬНО
// (так же можно прочитать двe первые функции параллельно и две последующие тоже параллельно)

twoOneFiles(function(next) {

  fs.readFile(dirPath + 'data_1.json', 'utf-8', function(err, data) {
    if (err) throw err;
    console.info(JSON.parse(data));
    next();
  });

  fs.readFile(dirPath + 'data_3.json', 'utf-8', function(err, data) {
    if (err) throw err;
    console.info(JSON.parse(data));
    next();
  });

}).then(function(next) {
  fs.readFile(dirPath + 'data_2.json', 'utf-8', function(err, data) {
    if (err) throw err;
    console.info(JSON.parse(data));
  });

  // fs.readFile(dirPath + 'data_1.json', 'utf-8', function(err, data) {
  //   if (err) throw err;
  //   console.info(JSON.parse(data));
  // });
});
