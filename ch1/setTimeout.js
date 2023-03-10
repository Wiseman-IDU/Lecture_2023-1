function run() {
  console.log('3초 후 실행'); //3
}
console.log('시작'); //1
setTimeout(run, 3000);
console.log('끝'); //2
