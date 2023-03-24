const sayNode = function() {
  console.log('Node');
};
var es = 'ES';
var oldObject = {
  sayJS: function() {
    console.log('JS');
  },
  sayNode: sayNode,
};
oldObject[es + 2015] = 'Fantastic';
oldObject.sayNode(); // Node
oldObject.sayJS(); // JS
// console.log(oldObject.ES6); // Fantastic
console.log(oldObject.ES2015); // Fantastic
