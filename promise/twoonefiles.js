var fs = require('fs');
var dirPath = __dirname + '/data/';

/********************************************************************/

// ЧИТАЕМ ДВЕ АСИНХРОННЫЕ ФУНКЦИИ ПАРАЛЛЕЛЬНО и ТРЕТЬЮ ПОСЛЕДОВАТЕЛЬНО
// (так же можно прочитать дву первые функции параллельно и две последующие тоже параллельно)

var promise = new Promise(function(resolve, reject) {
  var status = false;

  setTimeout(function() {
    fs.readFile(dirPath + '/data_1.json', 'utf-8', function(err, data) {
      if (err) {
        reject(err);
      }

      if (!status) {
        status = true;
      } else {
        resolve(data);
      }

      console.log(data);
    });
  }, 1000);

  fs.readFile(dirPath + '/data_2.json', 'utf-8', function(err, data) {
    if (err) {
      reject(err);
    }

    if (!status) {
      status = true;
    } else {
      resolve(data);
    }

    console.log(data);
  });
});

module.exports = promise;
