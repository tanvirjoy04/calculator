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

//create 3 variables
let num1,
    num2,
    op,
    result;

//create new func
function operate(){
  if(op=="+") num1 = add(+num1,+num2);
  if(op=="-") num1 = sub(+num1,+num2);
  if(op=="*") num1 = mul(+num1,+num2);
  if(op=="/") num1 = div(+num1,+num2);
      
  if( (num1.toString().length) > 11){
    num1 = num1.toPrecision(11);
  }

  result = num1;
  op = undefined;
  num2 = undefined;
  updateDisplay();
}

function displayZero(){
  if(result != undefined && op == undefined){
    num1 = undefined;
  }else if(result != undefined && op != undefined){
    num2 = undefined;
  }
  
  if(op == undefined){
      if(num1 == undefined) num1 = 0;
      else num1 += "0";
  }else{
      if(num2 == undefined) num2 = 0;
      else num2 += "0";
  }

  result = undefined;
  updateDisplay();
}
function displayOne(){
  if(result != undefined && op == undefined){
    num1 = undefined;
  }else if(result != undefined && op != undefined){
    num2 = undefined;
  }
  
  if(op == undefined){
      if(num1 == undefined) num1 = 1;
      else num1 += "1";
  }else{
      if(num2 == undefined) num2 = 1;
      else num2 += "1";
  }

  result = undefined;
  updateDisplay();
}
function displayTwo(){
  if(result != undefined && op == undefined){
    num1 = undefined;
  }else if(result != undefined && op != undefined){
    num2 = undefined;
  }
  
  if(op == undefined){
      if(num1 == undefined) num1 = 2;
      else num1 += "2";
  }else{
      if(num2 == undefined) num2 = 2;
      else num2 += "2";
  }

  result = undefined;
  updateDisplay();
}
function displayThree(){
  if(result != undefined && op == undefined){
    num1 = undefined;
  }else if(result != undefined && op != undefined){
    num2 = undefined;
  }
  
  if(op == undefined){
      if(num1 == undefined) num1 = 3;
      else num1 += "3";
  }else{
      if(num2 == undefined) num2 = 3;
      else num2 += "3";
  }

  result = undefined;
  updateDisplay();
}
function displayFour(){
  if(result != undefined && op == undefined){
    num1 = undefined;
  }else if(result != undefined && op != undefined){
    num2 = undefined;
  }
  
  if(op == undefined){
      if(num1 == undefined) num1 = 4;
      else num1 += "4";
  }else{
      if(num2 == undefined) num2 = 4;
      else num2 += "4";
  }

  result = undefined;
  updateDisplay();
}
function displayFive(){
  if(result != undefined && op == undefined){
    num1 = undefined;
  }else if(result != undefined && op != undefined){
    num2 = undefined;
  }
  
  if(op == undefined){
    if(num1 == undefined) num1 = 5;
    else num1 += "5";
  }else{
    if(num2 == undefined) num2 = 5;
    else num2 += "5";
  }

  result = undefined;
  updateDisplay();
}
function displaySix(){
  if(result != undefined && op == undefined){
    num1 = undefined;
  }else if(result != undefined && op != undefined){
    num2 = undefined;
  }
  
  if(op == undefined){
      if(num1 == undefined) num1 = 6;
      else num1 += "6";
  }else{
      if(num2 == undefined) num2 = 6;
      else num2 += "6";
  }

  result = undefined;
  updateDisplay();
}
function displaySeven(){
  if(result != undefined && op == undefined){
    num1 = undefined;
  }else if(result != undefined && op != undefined){
    num2 = undefined;
  }
  
  if(op == undefined){
      if(num1 == undefined) num1 = 7;
      else num1 += "7";
  }else{
      if(num2 == undefined) num2 = 7;
      else num2 += "7";
  }

  result = undefined;
  updateDisplay();
}
function displayEight(){
  if(result != undefined && op == undefined){
    num1 = undefined;
  }else if(result != undefined && op != undefined){
    num2 = undefined;
  }
  
  if(op == undefined){
      if(num1 == undefined) num1 = 8;
      else num1 += "8";
  }else{
      if(num2 == undefined) num2 = 8;
      else num2 += "8";
  }

  result = undefined;
  updateDisplay();
}
function displayNine(){
  if(result != undefined && op == undefined){
    num1 = undefined;
  }else if(result != undefined && op != undefined){
    num2 = undefined;
  }
  
  if(op == undefined) {
      if(num1 == undefined) num1 = 9;
      else num1 += "9";
  }else{
      if(num2 == undefined) num2 = 9;
      else num2 += "9";
  }

  result = undefined;
  updateDisplay();
}
function displayDot(){
  if(result != undefined && op == undefined){
    num1 = undefined;
  }else if(result != undefined && op != undefined){
    num2 = undefined;
  }

  if(op == undefined){
    if(num1 == undefined) num1 = "0.";
    else if(!num1.toString().includes(".")) num1 += ".";
  }else{
      if(num2 == undefined) num2 = "0.";
      else if(!num2.toString().includes(".")) num2 += ".";
  }

  result = undefined;
  updateDisplay();
}
function displayPercentage(){
   if(num1 == undefined){
    num1 = 0;
  }
  
  if(op == undefined){
    num1 = +num1/100;
    if(num1.toString().length > 11) 
      num1 = num1.toFixed(6);
  }else{
    num2 = +num2/100;
    if(num2.toString().length > 11) 
      num2 = num2.toFixed(6);
  }
  
  updateDisplay();
}
function displayRoot(){
  if(num1 == undefined){
    num1 = 0;
  }

  if(op == undefined){
    num1 = Math.sqrt(+num1);
    if(num1.toString().length > 11) 
      num1 = num1.toFixed(10);
  }else{
    num2 = Math.sqrt(+num2);
    if(num2.toString().length > 11) 
      num2 = num2.toFixed(10);
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
    if(num1 === "") display.textContent = "0";
  }else{
    num2 = num2.toString().slice(0,- 1);
    if(num2 === "") display.textContent = "0";
  }
  updateDisplay();
}
function displayClear(){
  num1 = undefined;
  num2 = undefined;
  op = undefined;
  result = undefined;
  display.textContent = "0";
}
function updateDisplay(){
  if(op == undefined){
    display.textContent = num1;
  }else{
    display.textContent = num2;
  }

  if(result != undefined){
    display.textContent = result;
  }

  if(num1 == "" || num2 == ""){
    display.textContent = "0";
  }
}

function assignPlus(){
  if(num2 != undefined){
    operate();
  }
  if(num1 == undefined){
    num1 = 0;
  }
  op = "+";
}
function assignMinus(){
  if(num2 != undefined){
    operate();
  }
  if(num1 == undefined){
    num1 = 0;
  }
  op = "-";
}
function assignMul(){
  if(num2 != undefined){
    operate();
  }
  if(num1 == undefined){
    num1 = 0;
  }
  op = "*";
}
function assignDiv(){
  if(num2 != undefined){
    operate();
  }
  if(num1 == undefined){
    num1 = 0;
  }
  op = "/";
}

const display = document.getElementById("display");

window.addEventListener("keydown", (event) => {
  const key = event.key;

  switch(key){
    case "0": displayZero(); break;
    case "1": displayOne(); break;
    case "2": displayTwo(); break;
    case "3": displayThree(); break;
    case "4": displayFour(); break;
    case "5": displayFive(); break;
    case "6": displaySix(); break;
    case "7": displaySeven(); break;
    case "8": displayEight(); break;
    case "9": displayNine(); break;
    case ".": displayDot(); break;
    case "+": assignPlus(); break;
    case "-": assignMinus(); break;
    case "*": assignMul(); break;
    case "/": assignDiv(); break;
    case "=": case "Enter": operate(); break;
    case "Backspace": displayBackspace(); break;
    case "Escape": case "c": displayClear(); break;
    default: break;
  }
});