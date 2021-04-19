let person = {name:'소녀시대',age:20};
let person1 = {name:'걸스데이',age:21};

function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed){
    console.log(speed + 'km속도로 걸어갑니다.');
}

let person2 = new Person('소녀시대',20);
let person3 = new Person('걸스데이',22);

person3.walk(10);

console.log(person3);