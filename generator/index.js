// var co = require('co');
var twoFiles = require('./twofiles');
var twoFilesParal = require('./twofilesparal');
var threeFiles = require('./threefiles');
var twoOneFiles = require('./twoonefiles');

// ЧИТАЕМ ДВЕ АСИНХРОННЫЕ ФУНКЦИИ ПОСЛЕДОВАТЕЛЬНО

var executeFunction = twoFiles.execute;
var twoFilesFunction = twoFiles.twoFiles

// executeFunction(twoFilesFunction());

// ЧИТАЕМ ДВЕ АСИНХРОННЫЕ ФУНКЦИИ ПАРАЛЛЕЛЬНО

var twoFilesParal = twoFilesParal();
// twoFilesParal.next();
// twoFilesParal.next();

// ЧИТАЕМ ТРИ АСИНХРОННЫЕ ФУНКЦИИ ПАРАЛЛЕЛЬНО

// var threeFiles = threeFiles();
//
// threeFiles.next();
// threeFiles.next();
// threeFiles.next();

// ЧИТАЕМ ДВЕ АСИНХРОННЫЕ ФУНКЦИИ ПАРАЛЛЕЛЬНО и ТРЕТЬЮ ПОСЛЕДОВАТЕЛЬНО

var twoOneFiles = twoOneFiles();

twoOneFiles.next();
twoOneFiles.next().value.then(
  function(result) {
    twoOneFiles.next();
  },
  function(err) {
    twoOneFiles.throw(err);
  }
);
