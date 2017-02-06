
var fs = require('fs');

var dirPath = __dirname + '/data/';

function readFirstJSON() {
 fs.readFile(dirPath + 'data_1.json', 'utf-8', function(err, data) {
   if (err) {
     return err;
   };
   console.info(data);

   return data;
 });
}

function readSecondJSON() {
 fs.readFile(dirPath + 'data_2.json', 'utf-8', function(err, data) {
   if (err) {
     return err;
   };
   console.info(data);

   return data;
 });
}

function readThirdJSON() {
 fs.readFile(dirPath + 'data_3.json', 'utf-8', function(err, data) {
   if (err) {
     return err;
   }
   console.info(data);

   return data;
 });
}


// ЧИТАЕМ ДВЕ АСИНХРОННЫЕ ФУНКЦИИ ПОСЛЕДОВАТЕЛЬНО

// var twoFiles = require('./twofiles');
// twoFiles.then(readSecondJSON, console.error)

// ЧИТАЕМ ДВЕ АСИНХРОННЫЕ ФУНКЦИИ ПАРАЛЛЕЛЬНО

// var twoFilesParal = require('./twofilesparal');

// ЧИТАЕМ ТРИ АСИНХРОННЫЕ ФУНКЦИИ ПАРАЛЛЕЛЬНО

// var threeFiles = require('./threefiles');

// ЧИТАЕМ ДВЕ АСИНХРОННЫЕ ФУНКЦИИ ПАРАЛЛЕЛЬНО и ТРЕТЬЮ ПОСЛЕДОВАТЕЛЬНО
// (так же можно прочитать дву первые функции параллельно и две последующие тоже параллельно)

// var twoOneFiles = require('./twoonefiles');
// twoOneFiles.then(readThirdJSON, console.error);
