// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

/*var getElementsByClassName = function(className, node) {

  var tNodes = [];

  node = node || document.body;

  var parts = node.className.split(' ');

  if (parts.indexOf(className) >= 0) {
    tNodes.push(node);
  }

  for (let i = 0; i < node.children.length; i++) {
    var results = getElementsByClassName(className, node.children[i]);
    tNodes = tNodes.concat(results);
  }

  return tNodes;

};*/


var getElementsByClassName = function(className){
 var output = [];
 function search(node){
  if(node.classList && node.classList.contains(className)){
    output.push(node);
  }
  for(var i = 0; i < node.childNodes.length; i++){
    search(node.childNodes[i]);
  }
}
  search(document.body);
  return output;
}