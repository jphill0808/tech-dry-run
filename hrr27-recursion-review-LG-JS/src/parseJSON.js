var parseJSON = function(json) {
//console.log(json[0]);
  // determine if array or object

    // if json[0] === '[' ie Array
    // create a cache for results
    // create a slice for array contents
    // we will want to split by ,

  //Array
  if(json.indexOf('[') === 0){
    var cache = [];
    //then it is an array
    let arrayContent = json.slice(1, -1);
    if(arrayContent.includes(' ')){
      arrayContent = arrayContent.replace(' ', '');
      // console.log('arrayContent!!!: ', arrayContent);
    }
    let splitArray = arrayContent.split(',');

    for (let i = 0; i < splitArray.length; i++) {
      // console.log('looping',splitArray[i]);
      cache.push(parseJSON(splitArray[i]));
    }
    return cache;
  }

  if( json.charAt(0) === '{'){
    //create container
    var res = {};
    let contents = json.slice(1, -1);
    console.log('contents: ', contents);
    if(contents.includes(' ')){
      contents = contents.replace(' ', '');
    }
    console.log('contents after: ', contents);

    let contentArray = contents.split(',');
    console.log('contentArray: ', contentArray);

    for(var i = 0; i < contentArray.length; i++){
      var cIdx = contentArray[i].indexOf(':');
      console.log(cIdx);
      var left = contentArray[i].slice(0, cIdx);
      var right = contentArray[i].slice(cIdx + 1);

      res[parseJSON(left)] = parseJSON(right);
    }
    return res;
  }

  // string check
  if (json.charAt(0) === '"') {
    return json.slice(1, -1);
  }


  // boolean if t (rue);
  if (json.charAt(0) === 't') {
    return true;
  }

  // boolean if f (alse);

  if (json.charAt(0) === 'f') {
    return false;
  }

  // if parseFloat
  if (parseInt(json.charAt(0)) !== NaN && json.charAt(0) === '-'){
    return parseInt(aaon);
 la }
};

let dealSpaces = (arr) => {
  arr.forEach((elem, cI, cArr) => {
    if (elem.includes(' ')) {
      cArr[cI] = cArr[cI].replace(' ', '');
    }
  });
  return arr;
}

var ex = ['a: apple'];
console.log('dealSpaces: ', dealSpaces(ex))

console.log(parseJSON('{"foo": true, "bar": false, "baz": null}'));

console.log(JSON.parse('{"foo": true, "bar": false, "baz": null}'))














/*
parseableStrings = [
  // basic stuff
  '[]',
  '{"foo": ""}',
  '{}',
  '{"foo": "bar"}',
  '["one", "two"]',
  '{"a": "b", "c": "d"}',
  '[null,false,true]',
  '{"foo": true, "bar": false, "baz": null}',
  '[1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]',
  '{"boolean, true": true, "boolean, false": false, "null": null }',

  // basic nesting
  '{"a":{"b":"c"}}',
  '{"a":["b", "c"]}',
  '[{"a":"b"}, {"c":"d"}]',
  '{"a":[],"c": {}, "b": true}',
  '[[[["foo"]]]]',

  // escaping
  '["\\\\\\"\\"a\\""]',
  '["and you can\'t escape thi\s"]',

  // everything all at once
  '{"CoreletAPIVersion":2,"CoreletType":"standalone",' +
    '"documentation":"A corelet that provides the capability to upload' +
    ' a folderâ€™s contents into a userâ€™s locker.","functions":[' +
    '{"documentation":"Displays a dialog box that allows user to ' +
    'select a folder on the local system.","name":' +
    '"ShowBrowseDialog","parameters":[{"documentation":"The ' +
    'callback function for results.","name":"callback","required":' +
    'true,"type":"callback"}]},{"documentation":"Uploads all mp3 files' +
    ' in the folder provided.","name":"UploadFolder","parameters":' +
    '[{"documentation":"The path to upload mp3 files from."' +
    ',"name":"path","required":true,"type":"string"},{"documentation":' +
    ' "The callback function for progress.","name":"callback",' +
    '"required":true,"type":"callback"}]},{"documentation":"Returns' +
    ' the server name to the current locker service.",' +
    '"name":"GetLockerService","parameters":[]},{"documentation":' +
    '"Changes the name of the locker service.","name":"SetLockerSer' +
    'vice","parameters":[{"documentation":"The value of the locker' +
    ' service to set active.","name":"LockerService","required":true' +
    ',"type":"string"}]},{"documentation":"Downloads locker files to' +
    ' the suggested folder.","name":"DownloadFile","parameters":[{"' +
    'documentation":"The origin path of the locker file.",' +
    '"name":"path","required":true,"type":"string"},{"documentation"' +
    ':"The Window destination path of the locker file.",' +
    '"name":"destination","required":true,"type":"integer"},{"docum' +
    'entation":"The callback function for progress.","name":' +
    '"callback","required":true,"type":"callback"}]}],' +
    '"name":"LockerUploader","version":{"major":0,' +
    '"micro":1,"minor":0},"versionString":"0.0.1"}',
  '{ "firstName": "John", "lastName" : "Smith", "age" : ' +
    '25, "address" : { "streetAddress": "21 2nd Street", ' +
    '"city" : "New York", "state" : "NY", "postalCode" : ' +
    ' "10021" }, "phoneNumber": [ { "type" : "home", ' +
    '"number": "212 555-1234" }, { "type" : "fax", ' +
    '"number": "646 555-4567" } ] }',
  '{\r\n' +
    '          "glossary": {\n' +
    '              "title": "example glossary",\n\r' +
    '      \t\t"GlossDiv": {\r\n' +
    '                  "title": "S",\r\n' +
    '      \t\t\t"GlossList": {\r\n' +
    '                      "GlossEntry": {\r\n' +
    '                          "ID": "SGML",\r\n' +
    '      \t\t\t\t\t"SortAs": "SGML",\r\n' +
    '      \t\t\t\t\t"GlossTerm": "Standard Generalized ' +
    'Markup Language",\r\n' +
    '      \t\t\t\t\t"Acronym": "SGML",\r\n' +
    '      \t\t\t\t\t"Abbrev": "ISO 8879:1986",\r\n' +
    '      \t\t\t\t\t"GlossDef": {\r\n' +
    '                              "para": "A meta-markup language,' +
    ' used to create markup languages such as DocBook.",\r\n' +
    '      \t\t\t\t\t\t"GlossSeeAlso": ["GML", "XML"]\r\n' +
    '                          },\r\n' +
    '      \t\t\t\t\t"GlossSee": "markup"\r\n' +
    '                      }\r\n' +
    '                  }\r\n' +
    '              }\r\n' +
    '          }\r\n' +
    '      }\r\n'
];
*/