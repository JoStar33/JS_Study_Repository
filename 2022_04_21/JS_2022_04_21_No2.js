//자스의 객체지향 프로그래밍 방법
let grades = {
  data: [],
  changeData: function() {
    this.changeableData = "What";
  },
  changeableData: "Mute"
}
let newData1 = {
  name: "Jose",
  grade: "A",
  age: 26
}
let newData2 = {
  name: "KwangSu",
  grade: "B",
  age: 23
}
grades.data.push(newData1);
grades.data.push(newData2);
grades.changeData();
console.log(grades.data);
console.log(grades.changeableData);