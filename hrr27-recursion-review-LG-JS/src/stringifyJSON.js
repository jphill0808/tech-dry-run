
var stringifyJSON = (obj) => {

  if( typeof(obj) === 'string' ) {
    return '"' + obj + '"';
  }

// if array[0] === string then the above function would return array[0] stringified

  if ( Array.isArray(obj) ) {
    obj = obj.map((elem) => stringifyJSON(elem));
    return '[' + obj.join(',') + ']'
  }

  if ( obj && typeof(obj) === 'object' ) {
    var results = [];
    for (var key in obj) {
      if (obj[key] === undefined || typeof(obj[key]) === 'function') {
        continue;
      }
      results.push( stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + results.join(',') + '}';
  }
  return '' + obj;
}

console.log(stringifyJSON({'a': [], 'c': {}, 'b': true}));
console.log('luke')