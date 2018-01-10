//Interfaces
interface SomeCustomType{shape:string;side:number}
function operate(x:SomeCustomType):number{
     return x.side*x.side;
}

var calc= operate({shape:"square", side:5});



//It is similar to C or C=++ struct datatype objects
interface operateObject {
     shape:string;
     side?:number;
     radius?:number;
}
function operate1(x:operateObject):number{
     return x.side*x.side;
}
var calc1= operate1({shape:"square", side:5});
var calc2= operate1({shape:"circle", radius:5});
interface FormattedOperateObject {
     design:string;
     dimension?:number;
}
function operate2(x:operateObject):FormattedOperateObject{
     var data:FormattedOperateObject = {
          design:x.shape,
          dimension:x.radius || x.side
     };
     //return data; //This is also valid
     // return {design:x.shape, dimension: (x.radius || x.side)}; //This is also valid
     return {design:x.shape}; //This is also valid
}
var calc3:FormattedOperateObject= operate2({shape:"circle", radius:5});

