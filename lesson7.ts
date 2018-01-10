interface player{
     run():void;
     addLives(n:number):void;
     score():number;
}
interface Employee{
     name:String;
     run():void;
     addLives(n:number):void;
     score():number;
}
interface Batsmen{
     name:String;
     run():void;
     addLives(n:number):void;
     score():number;
     static Dept:String;
}