var fs = require('fs');
var dirPath = __dirname + '/data/';

/********************************************************************/

// ЧИТАЕМ ДВЕ АСИНХРОННЫЕ ФУНКЦИИ ПОСЛЕДОВАТЕЛЬНО (первый вариант)

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

exports.twoFiles = twoFiles;

// (второй вариант)

function twoFiles_2(done) {
  setTimeout(() => {
    fs.readFile(dirPath + 'data_1.json', 'utf-8', function(err, data) {
      if (err) {
        done(err);
      } else {
        done(null, data);

        newReadFile(done);
      }
    });
  }, 1000);
}

function newReadFile(done) {
  fs.readFile(dirPath + 'data_2.json', 'utf-8', function(err, data) {
    if (err) {
      done(err);
    } else {
      done(null, data);
    }
  });
}

exports.twoFiles_2 = twoFiles_2;

// (третий вариант)

function first(next) {
  setTimeout(() => {
    fs.readFile(dirPath + 'data_1.json', 'utf-8', function(err, data) {
      if (err) {
        next(err);
      } else {
        console.log(data);
        next(null, data);
      }
    });
  }, 1000);
}

function second(next) {
  fs.readFile(dirPath + 'data_2.json', 'utf-8', function(err, data) {
    if (err) {
      next(err);
    } else {
      console.log(data);
      next(null, data);
    }
  });
}

function cb(err, data) {
  if (err) {
    err.name;
    err.message;
    err.stack;
  } 
}

function twoFiles_3(arrayOfFunc, cb) {
  'use strict';
  function next(err, data) {
    if (err || arrayOfFunc.length === 0) {
      cb(err, data);
    } else {
      let firstFunction = arrayOfFunc.shift();
      firstFunction(next);
    }
  }

  if (arrayOfFunc.length === 0) {
    cb();
  } else {
    let firstFunction = arrayOfFunc.shift();
    firstFunction(next);
  }
}

twoFiles_3([first, second], cb);
