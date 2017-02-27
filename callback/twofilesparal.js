var fs = require('fs');
var dirPath = __dirname + '/data/';

/********************************************************************/

// ЧИТАЕМ ДВЕ АСИНХРОННЫЕ ФУНКЦИИ ПАРАЛЛЕЛЬНО

/**
* readTwoFiles - инициализация функции
* @param {Callback} done - колбэк-функция вызывается с двумя аргументами: err, data
*/

function twoFilesParal(done) {
  var success;

  setTimeout(() => {
    fs.readFile(dirPath + 'data_1.json', 'utf-8', function(err, data) { // будет прочитан аторым
      if (success) {
        var data = success + data;
        done(err, data);
      } else {
        success = data;
      }
    });
  }, 1000);

  fs.readFile(dirPath + 'data_2.json', 'utf-8', function(err, data) { // будет прочитан первым
    if (success) {
      var data = success + data;
      done(err, data);
    } else {
      success = data;
    }
  });
}

twoFilesParal(function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})

module.exports = twoFilesParal;
