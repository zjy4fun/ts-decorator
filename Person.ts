function fun1(target: any) {
  target.prototype.name = '张三';
  target.age = 10;
}

@fun1
class Person1 {

}

const p1 = new Person1();
// @ts-ignore
console.log(p1.name); 
// @ts-ignore
console.log(Person1.age);