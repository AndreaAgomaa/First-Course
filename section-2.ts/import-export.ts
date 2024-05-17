//export function greeting(name: string = "World") {
//  console.log("Hola " + name);
//}
//let name = "Andrea";

//greeting(name);

import {
  addTwoNumbers,
  substractTwoNumbers,
  timesTwoNumbers,
  divideTwoNumbers,
} from "../helpers/math-helpers";

let num1 = 12;
let num2 = 16;

let total1: number = addTwoNumbers(num1, num2);
let total2: number = substractTwoNumbers(num1, num2);
let total3: number = timesTwoNumbers(num1, num2);
let total4: number = divideTwoNumbers(num1, num2);

console.log("Add:", total1);
console.log("Substract:", total2);
console.log("Times:", total3);
console.log("Divide:", total4);
