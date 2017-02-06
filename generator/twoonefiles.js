var fs = require('fs');
var dirPath = __dirname + '/data/';

/********************************************************************/

// ЧИТАЕМ ДВЕ АСИНХРОННЫЕ ФУНКЦИИ ПАРАЛЛЕЛЬНО и ТРЕТЬЮ ПОСЛЕДОВАТЕЛЬНО
// (так же можно прочитать дву первые функции параллельно и две последующие тоже параллельно)

function* twoOneFiles() {

  var prom_1 = yield new Promise(function(resolve, reject) {
    setTimeout(function () {
      fs.readFile(dirPath + 'data_1.json', 'utf-8', function(err, data) {
        if (err) throw err;

        console.log(data);
        resolve(data);
      });
    }, 500);
  });

  var prom_2 = yield new Promise(function(resolve, reject) {
    setTimeout(function () {
      fs.readFile(dirPath + 'data_2.json', 'utf-8', function(err, data) {
        if (err) throw err;

        console.log(data);
        resolve(data);
      });
    }, 1000);
  });

  var prom_3 = yield new Promise(function(resolve, reject) {
    fs.readFile(dirPath + 'data_3.json', 'utf-8', function(err, data) {
      if (err) throw err;

      console.log(data);
      // fs.readFile(dirPath + 'data_2.json', 'utf-8', function(err, data) {
      //   if (err) throw err;
      //
      //   console.log(data);
      //   resolve(data);
      // });
      resolve(data);
    });
  });
}

module.exports = twoOneFiles;
