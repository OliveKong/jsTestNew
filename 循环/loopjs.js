'use strict'
var x=1;
var i;
for (var i = 1; i <= 10; i++) {
	x=x*i;
}
document.writeln(x);


var arr=['apple','google','microsoft'];
var y,j;
for (var j = 0; j < arr.length; j++) {
	y=arr[j];
	document.writeln(y);
}

var a=0;
for (; ; ) {    //将无限循环下去
	if (a>=100) {
		break;    // 通过if判断来退出循环
	}
	a++;
	document.writeln(a);
}