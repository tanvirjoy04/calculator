//creating functions
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
console.log(add(3,7));
console.log(sub(5,3));
console.log(mul(3,3));
console.log(div(5,2));


//create 3 variables
let num1,
    num2,
    op;

//create new func
function operate(op,num1,num2){
    if(op=="+") add(num1,num2);
    if(op=="-") sub(num1,num2);
    if(op=="*") mul(num1,num2);
    if(op=="/") div(num1,num2);    
}