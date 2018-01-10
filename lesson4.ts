function add(a:number, b?:number):number{
     if(b){
          return a+b;
     }else{
          return a;
     }
}
console.log(add(10,20));
console.log(add(10));

function add11(a?:number, b?:number):number{
     if(b && a){
          return a+b;
     }else if(a){
          return a;
     }else if(b){
          return b;
     }else{
          return a;
     }
}
console.log(add11(10,20));
console.log(add11(10));

function add2(a?:number, b:number):number{
     if(b && a){
          return a+b;
     }else if(a){
          return a;
     }else if(b){
          return b;
     }else{
          return a;
     }
}
console.log(add2(10,20));
console.log(add2(10));

function add3(a?:number, b?:number=10):number{
     if(b && a){
          return a+b;
     }else if(a){
          return a;
     }else if(b){
          return b;
     }else{
          return a;
     }
}
console.log(add3(10,20));
console.log(add3(10));