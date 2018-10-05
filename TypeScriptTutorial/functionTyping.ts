/*typescript function typing */
var a:number;
var b:number;
var c:number;


a=10;
b=20;


/*we have to specify the type of the variable passed inside the function parameters otherwise it will not check types even it is declared already*/
function add(a:number,b:number,c:number=0):number{
	
	return a+b+c;
}
/*functionTyping.ts:18:19 - error TS2345: Argument of type '"foo"' is not assignable to parameter of type 'number'.

18 console.log(add(1,"foo"));*/
console.log(add(1,1,3));
console.log(add(1,1)); 
//console.log(add(1,"not")); //functionTyping.ts:22:19 - error TS2345: Argument of type '"not"' is not assignable to parameter of type 'number'.


                    

//console.log(add(1,1,3,4));/*functionTyping.ts:22:13 - error TS2554: Expected 2-3 arguments, but got 4.

