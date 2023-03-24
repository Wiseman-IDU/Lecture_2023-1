const sayNode = function() {
  console.log('Node');
};
var es = 'ES';
const newObject = {
  sayJS() {
    console.log('JS');
  },
  sayNode,
  [es + 6]: 'Fantastic',
};
// newObject.sayNode(); // Node
// newObject.sayJS(); // JS
console.log(newObject.ES6); // Fantastic
newObject.ES6 = 'FFFF';
console.log(newObject.ES6); // Fantastic
