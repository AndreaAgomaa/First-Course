let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];

for (let i = 0; i < numbers.length; i++) {
  let result = numbers[i] % 2;

  if (result === 0) {
    console.log("El numero:", numbers[i], "es par");
  } else {
    console.log("El numero:", numbers[i], "es impar");
  }
}
