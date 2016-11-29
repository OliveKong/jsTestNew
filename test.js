var array=[1,2,3];
console.log(array.length);//输出array的长度为3
array.length=5;//给array的长度赋值为5,此时array的内容变为[1,2,3,undefined,undefined]
console.log(array);//console.log输出还是会输出1,2,3,但是数组的长度已经改变了，如果改成alert(array),则可以看到弹出框内容为1,2,3,,
console.log(array[4]);//输出为undefined
// array[0]=0;
console.log(array);//array内容为 0,2,3
array[5]=5;
console.log(array);//array变为1,2,3,,,5
var arr=["a","b","c"];
console.log(arr.indexOf("c"));//输出结果为2
console.log(arr.indexOf(2));//输出结果为-1，当arr里不包含查询的这个值时，则返回-1
arr.push("sky","car");
console.log(arr);//arr的内容变为["a", "b", "c", "sky", "car"]
console.log(arr.pop());//输出car;由此发现一个方法，可以利用pop()获取数组的最后一个元素
console.log(arr);//arr的内容变为["a", "b", "c", "sky"]，剩下四个值
arr.pop();
arr.pop();
arr.pop();
arr.pop();//arr连续pop四次，arr变为空数组
console.log(arr.pop());//空数组继续pop不会报错，而会返回undefined值
var arrshift=["a","b","c"];
arrshift.unshift("sky","car");
console.log(arrshift);//arrshift变为["sky", "car", "a", "b", "c"]
console.log(arrshift.shift());//输出sky
console.log(arrshift);//arrshift变为["car", "a", "b", "c"]
arrshift.shift();
arrshift.shift();
arrshift.shift();
arrshift.shift();//shift()四次之后，数组变为空数组
console.log(arrshift.shift());//空数组shift()不会报错，会返回undefined值

var arrJoin=["Olive","Kong"];
console.log(arrJoin.join(""));//返回Olive-Kong字符串

var arrReverse=["Kong","Olive"];
console.log(arrReverse.reverse());//arrReverse变为了["Olive", "Kong"]

var arrSort=[2,5,1,40,26];
console.log(arrSort.sort());//排序结果为[1, 2, 26, 40, 5]
var arrSort2=["sort","block","css","html","js","sky"];
console.log(arrSort2.sort());//排序结果为["block", "css", "html", "js", "sky", "sort"]
var arrSort3=[1,"block","css","html","js","sky"];
console.log(arrSort3.sort());//排序结果为[1, "block", "css", "html", "js", "sky"]
var arrSort4=[1,"2","3","html","js","sky"];
console.log(arrSort4.sort());//排序结果为[1, "2", "3", "html", "js", "sky"]

var arrSlice=[1,2,3,4,5,6];
console.log(arrSlice.slice(0,4));//截取从索引0到索引为4之间的元素(不包括索引为4的值)，结果为[1,2,3,4]
console.log(arrSlice.slice(4));//截取从索引4之后的所有元素，包括索引为4的元素，结果为[5,6]

var arrSplice=["olive","kong","is","studying","js"];
console.log(arrSplice.splice(3,2,"playing","outside"));// 从索引3开始删除2个元素,然后再添加两个元素:返回值["studying","js"]
console.log(arrSplice);//上面的语句后，arrSplice变为了["olive", "kong", "is", "playing", "outside"]
arrSplice.splice(0,2);//从索引0开始向后删除两个元素，不添加任何元素
console.log(arrSplice);//数组变为["is", "playing", "outside"]
arrSplice.splice(0,0,"Popeye");//从索引0开始，向后删掉0个元素，然后添加上1个元素，返回值为[]
console.log(arrSplice);//数组变成["Popeye", "is", "playing", "outside"]

var arrConcat=[1,2,3];
var arrNew=arrConcat.concat(["a","b"]);
console.log(arrConcat);//返回值为[1,2,3],原数组并没有变
console.log(arrNew);//返回新数组为[1, 2, 3, "a", "b"]
//concat可以连接好几个数组
var arrC1 = ["George","John","Thomas"];
var arrC2 = ["James","Adrew","Martin"];
var arrC3 = ["William","Franklin","Martin"];
console.log(arrC1.concat(arrC2,arrC3));