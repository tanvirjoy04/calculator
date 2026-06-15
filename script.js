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
function operate(){
  if(op=="+") num1 = add(+num1,+num2);
  if(op=="-") num1 = sub(+num1,+num2);
  if(op=="*") num1 = mul(+num1,+num2);
  if(op=="/") num1 = div(+num1,+num2);
      
  if( (num1.toString().length) > 11)
    num1 = num1.toPrecision(11);

  op = undefined;
  num2 = undefined;
  updateDisplay();
}

function displayZero(){
  if(op == undefined){
      if(num1 == undefined) num1 = 0;
      else num1 += "0";
  }else{
      if(num2 == undefined) num2 = 0;
      else num2 += "0";
  }
  updateDisplay();
}
function displayOne(){
  if(op == undefined){
      if(num1 == undefined) num1 = 1;
      else num1 += "1";
  }else{
      if(num2 == undefined) num2 = 1;
      else num2 += "1";
  }
  updateDisplay();
}
function displayTwo(){
  if(op == undefined){
      if(num1 == undefined) num1 = 2;
      else num1 += "2";
  }else{
      if(num2 == undefined) num2 = 2;
      else num2 += "2";
  }
  updateDisplay();
}
function displayThree(){
  if(op == undefined){
      if(num1 == undefined) num1 = 3;
      else num1 += "3";
  }else{
      if(num2 == undefined) num2 = 3;
      else num2 += "3";
  }
  updateDisplay();
}
function displayFour(){
  if(op == undefined){
      if(num1 == undefined) num1 = 4;
      else num1 += "4";
  }else{
      if(num2 == undefined) num2 = 4;
      else num2 += "4";
  }
  updateDisplay();
}
function displayFive(){
  if(op == undefined){
      if(num1 == undefined) num1 = 5;
      else num1 += "5";
  }else{
      if(num2 == undefined) num2 = 5;
      else num2 += "5";
  }
  updateDisplay();
}
function displaySix(){
  if(op == undefined){
      if(num1 == undefined) num1 = 6;
      else num1 += "6";
  }else{
      if(num2 == undefined) num2 = 6;
      else num2 += "6";
  }
  updateDisplay();
}
function displaySeven(){
  if(op == undefined){
      if(num1 == undefined) num1 = 7;
      else num1 += "7";
  }else{
      if(num2 == undefined) num2 = 7;
      else num2 += "7";
  }
  updateDisplay();
}
function displayEight(){
  if(op == undefined){
      if(num1 == undefined) num1 = 8;
      else num1 += "8";
  }else{
      if(num2 == undefined) num2 = 8;
      else num2 += "8";
  }
  updateDisplay();
}
function displayNine(){
  if(op == undefined) {
      if(num1 == undefined) num1 = 9;
      else num1 += "9";
  }else{
      if(num2 == undefined) num2 = 9;
      else num2 += "9";
  }

  updateDisplay();
}
function displayDot(){
  if(op == undefined){
      if(num1 == undefined) num1 = "0.";
      else num1 += ".";
  }else{
      if(num2 == undefined) num2 = "0.";
      else num2 += ".";
  }
  updateDisplay();
}
function displayClear(){
  num1 = undefined;
  num2 = undefined;
  op = undefined;
  display.textContent = "";
}
function displayPercentage(){
  if(op == undefined){
    num1 = +num1/100;
  }else{
    num2 = +num2/100;
  }
  updateDisplay();
}
function displayRoot(){
  if(op == undefined){
    num1 = Math.sqrt(+num1);
  }else{
    num2 = Math.sqrt(+num2);
  }
  updateDisplay();
}
function displayPie(){
  if(op == undefined){
    num1 = Math.PI.toFixed(10);
  }else{
    num2 = Math.PI.toFixed(10);
  }
  updateDisplay();
}
function displayBackspace(){
  if(op == undefined){
    num1 = num1.toString().slice(0,- 1);
  }else{
    num2 = num2.toString().slice(0,- 1);
  }
  updateDisplay();
}
function updateDisplay(){
  if(op == undefined){
    display.textContent = num1;
  }else{
    display.textContent = num2;
  }
}

function assignPlus(){
  if(num2){
    operate();
  }
  op = "+";
}
function assignMinus(){
  if(num2){
    operate();
  }
  op = "-";
}
function assignMul(){
  if(num2){
    operate();
  }
  op = "*";
}
function assignDiv(){
  if(num2){
    operate();
  }
  op = "/";
}

const display = document.getElementById("display");