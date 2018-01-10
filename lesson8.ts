class Employee{
     name:string;
     phone:number;
}

var test:Employee = new Employee();
test.name = 'Sai';
test.phone=1000;

class EmployeeNew{
     firstname:string;
     phone:number;
     static someId:string = "Sai"; // static Only allowed for Class
     constructor(name:string, mobile:number){
          this.firstname = name;
          this.phone = mobile;
     }
     getSomething = ():number => {
          EmployeeNew.someId = "Testing Assigning to static data";
          return this.phone;
     }
     getName = ():string => {
          return this.firstname;
     }
     static getNameTestFat = ():string => {
          return this.firstname;
     }
     static getNameTest():string{
          return EmployeeNew.someId;
     }
     
     static getPhone():number{
          return this.phone;
     }

     get phoneNumber(){ // This is a getter
          return this.phone;
     }
     set fullname(someName:string,someOtherName:string){

     }
     set fullname(someName:string){
          this.firstname = someName;
     }
}

var testt:EmployeeNew = new EmployeeNew("Kumar", 100);
testt.firstname = 'Sai';
testt.phone=1000;
testt.phoneNumber=100; //Because it is readonly property
testt.fullname = "Kumar" //Setter used at 42

//Usually set and get are done for some dynamic calculations or executions


class Department{
     name:string; 
     phone:Number;
     constructor()  //No Return type for the Constructor
     {

     }
     constructor(name:string)  //No Return type for the Constructor
     {

     }
}
var test1:Department = new Department();