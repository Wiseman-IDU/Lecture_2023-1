function first() { //2
  second(); //3
  console.log('첫 번째');
}
function second() {
  third(); //4
  console.log('두 번째');
}
function third() {
  console.log('세 번째'); //5
}
first(); //1
