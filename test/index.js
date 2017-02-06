function prom(Callback) {
  var query = [];

  function _next() {
    var cb = query.shift();
    if (cb) {
      cb(_next);
    }
  }

  setTimeout(_next, 0);

  var then = function(cb) {
    query.push(cb);

    return { then: then }
  }

  return then(Callback);
}


prom(function(next) { console.log('hi hi hi'); next()})
  .then(function(next) {
      console.log('ho');
      setTimeout(function() {
        console.log('ho ho');
        next();
      }, 1000);
    }
  ).then(function(next) {
    console.log('hey');
    setTimeout(function() {
      console.log('hey hey hey');
      next();
    },500);
  });
