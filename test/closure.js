function fun() {
  var count = 0;

  var funfun = function() {
    console.log(count);
    count++
    return {funfun: funfun};
  }

  return funfun;
}

var newf = new fun();
newf().funfun().funfun().funfun();
