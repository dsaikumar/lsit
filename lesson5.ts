//Method Overloading

function perimeter(side1:number);
function perimeter(side1:string);  // This is the Drawback in typescript
function perimeter(side1:number, side2:number);
function perimeter(side1:number, side2:number, side3:number, side4:number);
// function perimeter(side1:number, side2:number, side3:number);
function perimeter(side1:number, side2?:number, side3?:number, side4?:number):number{

     //Write your logic based on conditional checking of different sides
     return 10;
}

perimeter(1); //square
perimeter(1,2); //rectangle
perimeter(1,2,3); //quadrilateral --> Fails, since declaration is not there, if this need to work uncomment line 7
perimeter(1,2,3,4); //trapezium
