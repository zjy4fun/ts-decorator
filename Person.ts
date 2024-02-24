// function fun1(target: any) {
//   target.prototype.name = '张三';
//   target.age = 10;
// }

// @fun1 // 等价于 Person = fun1(Person)
// class Person1 {

// }

// const p1 = new Person1();
// // @ts-ignore
// console.log(p1.name); 
// // @ts-ignore
// console.log(Person1.age);

// 装饰器工厂
// function func2(options: any) {
//   return function(target: any) {
//     target.prototype.userName = options.name;
//     target.prototype.userAge = options.age;
//   }
// }

// @func2({
//   name: '张三',
//   age: 18
// })
// class Person2 {

// }

// const p2 = new Person2();
// // @ts-ignore
// console.log(p2.userName, p2.userAge);

// 装饰器组合
// function demo1(target: any) {
//   console.log('demo1');
// }
// function demo2() {
//   console.log('demo2');
//   return function(target: any) {
//     target.prototype.name = '张三';
//     console.log('demo2 inner')
//   }
// }
// function demo3() {
//   console.log('demo3');
//   return function(target: any) {
//     target.prototype.name = '张三';
//     console.log('demo3 inner')
//   }
// }
// function demo4(target: any) {
//   console.log('demo4');
// }

// @demo1
// @demo2()
// @demo3()
// @demo4
// class Person3 {

// }

// const p3 = new Person3();

// 属性装饰器
// function func4(target: any,attr: any) {
//   console.log(target, attr);
// }

// class Person4 {
//   @func4
//   // @ts-ignore
//   userName: string;
// }

// const p4 = new Person4();

// 方法装饰器
function func5(target: any, methodName: any, desc: any) {
  console.log(target, methodName, desc);
}

class Person5 {
  @func5
  getName() {
    console.log('getName');
  }
}

const p5 = new Person5();
// @ts-ignore
p5.getName();