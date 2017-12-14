alert('Hello World!');

var myNumberObject:number=100;
myNumberObject='sai';
myNumberObject=true;
myNumberObject=[];
myNumberObject={};
myNumberObject=function(){};
myNumberObject=null;
myNumberObject=undefined;

var myStringOBject:string='Sai';
myStringOBject=100;
myStringOBject=true;
myStringOBject=[];
myStringOBject={};
myStringOBject=function(){};
myStringOBject=null;
myStringOBject=undefined;

var myBooleanObject:boolean=true;
myBooleanObject=100;
myBooleanObject='sai';
myBooleanObject=[];
myBooleanObject={};
myBooleanObject=function(){};
myBooleanObject=null;
myBooleanObject=undefined;

var myArray1:string[]=['s'];
myArray1.push(123);
myArray1.push(true);

var myArray2:number[]=[12];
var myArray3:boolean[]=[12,'s',{}];
var myArray4:any[]=[12,'s',function(){}, {}, []];

var myObject:Object={};

enum myConstants{
     pi = 3.14,
     e = 2.73,
     log2 = 0.3,
     name="saikumar"
}

console.log('Finding area of circle :');
var radius : number = 10;
console.log(2* myConstants.pi * radius);
console.log(myConstants.name);
myConstants.pi = 10;

