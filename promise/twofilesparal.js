var fs = require('fs');
var dirPath = __dirname + '/data/';

/********************************************************************/

// ЧИТАЕМ ДВЕ АСИНХРОННЫЕ ФУНКЦИИ ПАРАЛЛЕЛЬНО

var promise = new Promise(function(resolve, reject) {

  setTimeout(function() {
    fs.readFile(dirPath + '/data_1.json', 'utf-8', function(err, data) {
      if (err) {
        reject(err);
      } else {
        console.log(data);
        resolve(data);
      }
    });
  }, 1000);

  fs.readFile(dirPath + '/data_2.json', 'utf-8', function(err, data) {
    if (err) {
      reject(err);
    } else {
      console.log(data);
      resolve(data);
    }
  });
});

module.exports = promise;
