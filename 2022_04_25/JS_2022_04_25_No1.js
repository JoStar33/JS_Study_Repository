class Subject {
  constructor(name, subjectNum){
    this.name = name;
    this.subjectNum = subjectNum;
    this.peopleArr = new Array();
  }
}
class Person {
  constructor(name, schoolNumber, age, belong){
    this.name = name; //이름
    this.schoolNumber = schoolNumber; //학번
    this.age = age; //나이
    this.belong = belong; //소속
  }
}
let subjectArr = new Array();
let computerConstructer = new Subject("컴퓨터구조론", 12);
let javaProgramming = new Subject("자바프로그래밍", 15);
let pythonProgramming = new Subject("파이썬프로그래밍", 3);
let cProgramming = new Subject("C프로그래밍", 5);

let studentArr = new Array();
let minho = new Person("민호", 201611763, 25, "컴퓨터공학부");
let chohi = new Person("초희", 201712532, 25, "컴퓨터공학부");
let byunggu = new Person("병구", 201611442, 25, "컴퓨터공학부");
let yohan = new Person("요한", 201312231, 25, "컴퓨터공학부");

computerConstructer.peopleArr.push(minho);
computerConstructer.peopleArr.push(chohi);
javaProgramming.peopleArr.push(minho);
javaProgramming.peopleArr.push(chohi);
javaProgramming.peopleArr.push(byunggu);
javaProgramming.peopleArr.push(yohan);
cProgramming.peopleArr.push(chohi);
cProgramming.peopleArr.push(minho);
cProgramming.peopleArr.push(yohan);

studentArr.push(minho);
studentArr.push(chohi);
studentArr.push(byunggu);
studentArr.push(yohan);

subjectArr.push(computerConstructer);
subjectArr.push(javaProgramming);
subjectArr.push(pythonProgramming);
subjectArr.push(cProgramming);

console.log("<과목정보>");
for(let subElement of subjectArr){
  console.log(subElement.name);
}
console.log("<수강정보>");
for(let subElement of subjectArr){
  console.log("*"+subElement.name)
  for(let peopleInfo of subElement.peopleArr){
    console.log("--이름: " + peopleInfo.name + " 학번: " + peopleInfo.schoolNumber);
  }
}

