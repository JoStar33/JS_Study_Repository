class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

class Police extends Person {
  callName(){
    return this.name + " 경찰"
  }
}

const junho = new Person('준호', 26);
const minsu = new Police('민수', 23)
console.log(junho.name);
console.log(minsu.callName());
