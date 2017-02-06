var fs = require('fs');
var dirPath = __dirname + '/data/';

/********************************************************************/

// ЧИТАЕМ ДВЕ АСИНХРОННЫЕ ФУНКЦИИ ПАРАЛЛЕЛЬНО

function* twoFilesParal() {

  var prom_1 = yield new Promise(function(resolve, reject) {
    setTimeout(function () {
      fs.readFile(dirPath + 'data_1.json', 'utf-8', function(err, data) {
        if (err) throw err;

        console.log(data);
        resolve(data);
      });
    }, 1000);
  });

  var prom_2 = yield new Promise(function(resolve, reject) {
    setTimeout(function () {
      fs.readFile(dirPath + 'data_2.json', 'utf-8', function(err, data) {
        if (err) throw err;

        console.log(data);
        resolve(data);
      });
    }, 500);
  });
}

module.exports = twoFilesParal;
