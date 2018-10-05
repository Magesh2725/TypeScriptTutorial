/*Typescript Implicit function*/
/*
ImplicitTyping.ts:5:1 - error TS2322: Type '"anyString"' is not assignable to type 'number'.

5 a="anyString";
  ~

ImplicitTyping.ts:11:1 - error TS2322: Type '"anyboolean"' is not assignable to type 'boolean'.

11 b="anyboolean";
   ~

ImplicitTyping.ts:24:1 - error TS2322: Type 'true' is not assignable to type 'string'.

24 h=true;*/
var a = 10;
//a="anyString";
console.log(a);
var b = true;
//b="anyboolean";
console.log(b);
function display() {
    return "Good Morning";
}
var h;
h = display();
console.log(h);
h = true;
console.log(h);
