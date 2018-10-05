var a:string;
var b:boolean;
var c:number;

a='magesh';
b=true;
c=100;


/*if we use '10' typeSafeCheck.ts:7:1 - error TS2322: Type '"10"' is not assignable to type 'number'.

7 c='10';*/
console.log(a+' '+b+' '+c);