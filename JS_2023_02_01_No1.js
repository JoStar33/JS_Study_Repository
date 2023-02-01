//자바스크립트로 직접 구현해보는 enum

const enumByJavascript = Object.freeze({
  ONE: Symbol('one'),
  TWO: Symbol('two'),
  THREE: Symbol('three')
});

if(enumByJavascript.ONE){
  console.log('one_run');
}

if(enumByJavascript.FOUR){
  console.log('four_run');
}