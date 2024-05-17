export let number: number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5];
let maxNumber = -999999999; // o number[0];
for (let i = 0; i < number.length; i++) {
  if (number[i] >= maxNumber) {
    maxNumber = number[i];
  }
}

console.log("El numero mayor es:", maxNumber);
