var fs = require('fs');
var dirPath = __dirname + '/data/';

/********************************************************************/

// ЧИТАЕМ ДВЕ АСИНХРОННЫЕ ФУНКЦИИ ПОСЛЕДОВАТЕЛЬНО

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

});

module.exports = promise;
