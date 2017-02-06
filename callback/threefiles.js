var fs = require('fs');
var dirPath = __dirname + '/data/';

/********************************************************************/

// ЧИТАЕМ ТРИ АСИНХРОННЫЕ ФУНКЦИИ ПАРАЛЛЕЛЬНО

/**
* readTwoFiles - инициализация функции
* @param {Callback} done - колбэк-функция вызывается с двумя аргументами: err, data
*/

function threeFiles(done) {
  fs.readFile(dirPath + 'data_2.json', 'utf-8', function(err, data) {
    if (err) {
      done(err);
    } else {
      done(null, data);
    }
  });

  fs.readFile(dirPath + 'data_1.json', 'utf-8', function(err, data) {
    if (err) {
      done(err);
    } else {
      done(null, data);
    }
  });

  fs.readFile(dirPath + 'data_3.json', 'utf-8', function(err, data) {
    if (err) {
      done(err);
    } else {
      done(null, data);
    }
  });
}

module.exports = threeFiles;
