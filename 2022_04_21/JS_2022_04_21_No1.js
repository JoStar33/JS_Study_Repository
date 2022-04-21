
//복수의 배열을 추가할때 쓰는 concat
let li = ['a', 'b', 'c', 'd', 'e'];
li = li.concat(['f', 'g']);
console.log(li);

//배열 맨앞에 값 추가
li.unshift('z');
console.log(li);

//첫번째 위치는 들어갈 배열의 위치, 두번째 인자는 제거할 원소들의 수
li.splice(2, 0, 'B');
console.log(li);

//배열의 첫번째 원소를 제거할때에는 
li.shift();
console.log(li);

//배열의 마지막 요소를 제거한다.
li.pop();
console.log(li);

//배열의 정렬
let sortedLi = ['c', 'e', 'a', 'b', 'd'];
sortedLi.sort();
console.log(sortedLi);

//역순으로 하고싶으면
sortedLi.reverse();
console.log(sortedLi);