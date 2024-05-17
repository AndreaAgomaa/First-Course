function max(numb1: number, numb2: number, numb3: number) {
  if (numb1 > numb2) {
    return numb1 > numb3 ? numb1 : numb3; //si numb1 es mayor que numb3 retorna numb1, de lo contrario, retorna numb3
  }

  if (numb3 > numb2) {
    return numb3 > numb1 ? numb3 : numb1;
  }
  return numb2;
}

//let maxNumber = -999;
//let allNumbers = [numb1, numb2, numb3];
//for (let i = 0; i < allNumbers.length; i++) {
//  if (allNumbers[i] > maxNumber) {
//    maxNumber = allNumbers[i];
//  }
//}
//return maxNumber;

let maxValue = max(70, 120, 600);
console.log(maxValue);
