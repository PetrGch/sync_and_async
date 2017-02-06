'use strict'

var fs = require('fs');

function* sequences() {
  let val_1 = yield function(cb) {
    setTimeout(function() {
      console.log('hi');
      cb();
    }, 1000);
  };

  console.log(val_1);

  let val_2 = yield function(cb) {
    setTimeout(function() {
      console.log('there');
      cb();
    }, 500);
  }

  console.log(val_2);
}

// let generator = sequences();
//
// let result = generator.next().value;
// result(function() { generator.next(4).value; generator.next(5); });

function* async() {
  let prom_1 = yield new Promise(function(resolve, reject) {
    setTimeout(() => { console.log('hi'); resolve('hi data')}, 1000)
  });

  let prom_2 = yield new Promise(function(resolve, reject) {
    setTimeout(() => { console.log('there'); resolve('there data') }, 500);
  });

  return 'the end'
}

function execute(generator, yieldValue) {

  let next = generator.next(yieldValue);

  console.log(next.value);

  if (!next.done) {
    next.value.then(
      result => execute(generator, result),
      err => generator.throw(err)
    );
  } else {
    // обработаем результат return из генератора
    // обычно здесь вызов callback или что-то в этом духе
    console.log(next.value);
  }

}

execute(async());
