var fs = require('fs');
var dirPath = __dirname + '/data/';

/********************************************************************/

// ЧИТАЕМ ДВЕ АСИНХРОННЫЕ ФУНКЦИИ ПОСЛЕДОВАТЕЛЬНО

/**
* readTwoFiles - инициализация функции
* @param {Callback} done - колбэк-функция вызывается с двумя аргументами: err, data
*/

function twoFiles(done) {
  fs.readFile(dirPath + 'data_1.json', 'utf-8', function(err, data) { // будет прочитан первым
    if (err) {
      done(err);
    } else {
      done(null, data);

      fs.readFile(dirPath + 'data_2.json', 'utf-8', function(err, data) { // будет прочитан вторым
        if (err) {
          done(err);
        } else {
          done(null, data);
        }
      });
    }
  });
}

module.exports = twoFiles;
