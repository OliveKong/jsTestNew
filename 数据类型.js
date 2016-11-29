'use strict';
// 数组
var arr=[1,2,3.14,'hello',null,true];
console.log("arr数组的长度："+arr.length);
// 对象
var person={
	name:"Bob",
	age:20,
	tags:['js','web','mobile'],
	city:'beijing',
	hasCar:true,
	zipcode:null
}
console.log("对象person的name属性是："+person.name);
console.log("对象person的zipcode属性是："+person.zipcode);
// 变量
var a;//申明了变量a,此时a的值为undefined
var $b     =1;//申明了变量$b,同时给$b赋值，此时$b的值为1
var s_007  ="007";//s_007是一个字符串
var Answer =true;//Answer是一个布尔值true
var t      =null;//t的值是null
//下面的代码在严格模式下将会报错，而在非严格模式下则不会
//严格模式下，申明变量必须用var
// abc="hello,world";
// console.log(abc);
//多行字符串
console.log("你好，\n 我叫\n Olive");
console.log(`你好
我叫
olive`);//这里的点是波浪线下面的点，而不是单引号
//模板字符串
//把多个字符串连接起来可以用+连接
var name ="olive";
var age= 26;
var message='hello,my name is '+name+',I\'m '+age+' years old';
console.log(message);
//如果有很多变量需要连接，用+号就比较麻烦。ES6新增了一种模板字符串，表示方法和上面的多行字符串一样，但是它会自动替换字符串中的变量
var name1 ="Mike";
var age1=20;
var message1=`hello，${name1},your age is ${age1}`;
console.log(message1);
var s="Hello";
console.log("名为s的字符串大写变成"+s.toUpperCase());
console.log("名为s的字符串小写变成"+s.toLowerCase());
var ss="hello, world!";
console.log(ss.indexOf("world"));// 返回7
console.log(ss.indexOf("World"));// 没有找到指定的子串，返回-1
console.log(ss.substring(0,5));// 索引0开始到5（不包括5），返回'hello'
console.log(ss.substring(7));// 从索引7开始到结束，返回'world'

