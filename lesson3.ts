function add(a:number, b:number = a):number{
     var sum:number = 0;
     sum = a+b;
     return sum;
}
add(10,20);
add(10);

function add1(a:number, b:number = 0):number{
     var sum:number = 0;
     sum = a+b;
     return sum;
}
add1(10,20);
add1(10);

function add2(a:number, b:number):number{
     var sum:number = 0;
     sum = a+b;
     return sum;
}
add2(10,20);
add2(10);

function add3(a:number = b, b:number):number{
     var sum:number = 0;
     sum = a+b;
     return sum;
}
add3(10,20);
add3(10);