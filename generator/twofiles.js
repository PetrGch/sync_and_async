var fs = require('fs');
var dirPath = __dirname + '/data/';

/********************************************************************/

// ЧИТАЕМ ДВЕ АСИНХРОННЫЕ ФУНКЦИИ ПОСЛЕДОВАТЕЛЬНО

function* twoFiles() {

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
    fs.readFile(dirPath + 'data_3.json', 'utf-8', function(err, data) {
      if (err) throw err;

      console.log(data);
      resolve(data);
    });
  });
}

function execute(generator, yieldValue) {

  var next = generator.next(yieldValue);

  if (!next.done) {
    next.value.then(
      function(result) {
        execute(generator, result);
      },
      function(err) {
        generator.throw(err);
      }
    );
  } else {
    console.log('end');
  }
}

exports.execute = execute;
exports.twoFiles = twoFiles;
